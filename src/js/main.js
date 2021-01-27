// Este es el punto de entrada de tu aplicacion
import { myFunction } from './index.js';
import { login } from '../view/1templateLogin.js';
import { register } from '../view/2templateRegister.js';
import { profile } from '../view/3templateProfile.js';
import { wall } from '../view/4templateWall.js';

myFunction();

// document.getElementById("root").innerHTML = login(); 
// document.getElementById("root").innerHTML = register();
// document.getElementById("root").innerHTML = profile();
document.getElementById("root").appendChild(wall());
// pruebalo