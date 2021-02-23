import { myFunction } from "./index.js";
// import { login } from '../view/1templateLogin.js';
import { showTemplate, changeRoute } from "../router.js";
// myFunction();
//Función login de página Bienvenida
//document.getElementById("root").innerHTML= login();

//router("login");
const init = () => {
     showTemplate("login");
//   window.addEventListener("hashchange", () => {
//     myFunction();
//     changeRoute(window.location.hash);
    
//   });
};
window.addEventListener("load", init);