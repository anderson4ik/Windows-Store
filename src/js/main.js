import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let modalState = {};
  let deadline = '2020-12-31T00:00:00.000+02:00';

  changeModalState(modalState);
  modals();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "after_click");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
  // '.decoration_content > div > div' - Matches any div element that is a child of class '.decoration_content'.
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img > img",
    "do_image_more",
    "inline-block"
  );
  forms(modalState);
  timer(".container1", deadline);
  images();
});
