// import { myFunction } from "./index.js";
import { login } from '../view/1_template_Login.js';
import { changeRoute } from "../router.js";

const init = () => {
  document.getElementById("root").appendChild(login());
  window.addEventListener("hashchange", () => {
    changeRoute(window.location.hash);
  });
};
window.addEventListener("load", init);