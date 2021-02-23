const closeModalWindows = () => {
  const windows = document.querySelectorAll("[data-modal]"); // data attr

  // to close all open modal windows, when we open a new modal window and when we click outside of modal window
  windows.forEach((item) => {
    item.style.display = "none";
  });

  document.body.style.overflow = ""; // to allow scrolling the page
};

export default closeModalWindows;
