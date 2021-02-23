import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {

  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    //use queruSelectorAll, because of function bindActionsToElems (forEach loop that we use inside).
    windowHeight = document.querySelectorAll("#height"),
    //use queruSelectorAll, because of function bindActionsToElems (forEach loop that we use inside).
    windowType = document.querySelectorAll("#view_type"),
    //use queruSelectorAll, because of function bindActionsToElems (forEach loop that we use inside).
    windowProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (
          item.nodeName // to check name of node
        ) {
          case "SPAN":
            state[prop] = index;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              index === 0 ? (state[prop] = "cold") : (state[prop] = "warm");
              elem.forEach((box, j) => {
                // only one checkbox can be selected
                box.checked = false;
                if (index === j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }

  bindActionToElems("click", windowForm, "form");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowProfile, "profile");
};

export default changeModalState;
