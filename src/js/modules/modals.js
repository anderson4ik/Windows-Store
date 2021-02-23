import closeModalWindows from './closeModalWindows';

const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      scroll = calcScroll();
      

    trigger.forEach((item) => {
      // we loop through array of trigger selectors
      item.addEventListener("click", (event) => {
        // to open modal window
        if (event.target) {
          //check if target event exist
          event.preventDefault();
        }

        // to close all open modal windows, when we open a new modal window
        closeModalWindows();

        modal.style.display = "block"; //to show modal window
        document.body.style.overflow = "hidden"; // to prevent scrolling the page when modal is active
        //document.body.classList.add('modal-open'); // adding class from bootstrap to prevent scrolling of the page
        document.body.style.marginRight = `${scroll}px`; // to prevent jumping of page right when scroll disapper
      });
    });

    close.addEventListener("click", () => {
      // to close modal window
      modal.style.display = "none"; //to hide modal window
      document.body.style.overflow = ""; // to allow scrolling the page
      //document.body.classList.remove('modal-open'); // removing class from bootstrap to allow scrolling of the page
      document.body.style.marginRight = `0px`; // removing margin when we will get scroll-bar

      // to close all open modal windows, when we click on a cross(X)
      closeModalWindows();
    });

    modal.addEventListener("click", (event) => {
      // to close modal window, when we click outside of modal window
      if (event.target === modal && closeClickOverlay) {

        // to close all open modal windows, when we click outside of modal window
         closeModalWindows();

        modal.style.display = "none"; //to hide modal window
        document.body.style.overflow = ""; // to allow scrolling the page
        //document.body.classList.remove('modal-open'); // removing class from bootstrap to allow scrolling of the page
        document.body.style.marginRight = `0px`; // removing margin when we will get scroll-bar
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block"; //to show modal window
      document.body.style.overflow = ""; // to allow scrolling the page
    }, time);
  }

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth; // return scroll-bar width
    // The offsetWidth property returns the viewable width of an element in pixels, including padding, border and scrollbar, but not the margin.
    // The clientWidth property returns the viewable width of an element in pixels, including padding, but not the border, scrollbar or margin.

    div.remove(); 

    return scrollWidth;
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(".popup_calc_button",".popup_calc_profile", ".popup_calc_profile_close", false);
  bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
  //showModalByTime(".popup", 60000);
};

export default modals;
