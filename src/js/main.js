// Este es el punto de entrada de tu aplicacion
import { myFunction } from './index.js';
import { login } from '../view/1templateLogin.js';

myFunction();
//Función login de página Bienvenida
document.getElementById("root").innerHTML= login(); 