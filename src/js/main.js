// Este es el punto de entrada de tu aplicacion
import { myFunction } from "./index.js";
// import { login } from '../view/1templateLogin.js';
import { router, changeRoute } from "../router.js";
// myFunction();
//Función login de página Bienvenida
//document.getElementById("root").innerHTML= login();

//router("login");
const init = () => {
     router("login");
//   window.addEventListener("hashchange", () => {
//     myFunction();
//     changeRoute(window.location.hash);
    
//   });
};
window.addEventListener("load", init);