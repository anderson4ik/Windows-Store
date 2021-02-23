const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = "block") => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);
  //active = document.querySelectorAll(activeClass);

  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });

    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    content[i].style.display = display; // "block"
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;
    // check if we click on tab or tab child by class
    if (
      target && // check if target exist, because some elements not support event click
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        // removing dot(.) from tabSelector using regular expretion
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((item, index) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
};

export default tabs;
