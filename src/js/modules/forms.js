import checkNumInputs from "./checkNumInputs";
import closeModalWindows from "./closeModalWindows";

const forms = (state) => {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input");

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: "Loading...",
    success: "Thank you, we will contact you as soon as possible.",
    failure: "Something go wrong, try again after some time...",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div"); // creating element
      statusMessage.classList.add("status"); // adding class
      item.appendChild(statusMessage); // sending to DOM

      const formData = new FormData(item);
      // The FormData object lets you compile a set of key/value pairs to send using XMLHttpRequest.
      if (item.getAttribute("data-calc") === "end") {
        // adding data from calc-end modal window
        for (let key in state) {
          formData.append(key, state[key]); // appending all data to formData object
        }
      }

      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove(); // removing element of statusMessage
            closeModalWindows(); // closing also all modal window that is opened

            for (let prop in state) {
              // cleaning state, deleting all properties from state object
              delete state[prop];
            }
          }, 6000);
        });
    });
  });
};

export default forms;
