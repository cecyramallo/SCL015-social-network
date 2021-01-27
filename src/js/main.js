// Este es el punto de entrada de tu aplicacion
import { myFunction } from './index.js';
import { login } from '../view/1templateLogin.js';

//For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvQnHTUIHwdoXQAl5doWC-LgqYG9hk0VY",
  authDomain: "social-network-302813.firebaseapp.com",
  projectId: "social-network-302813",
  storageBucket: "social-network-302813.appspot.com",
  messagingSenderId: "296135017295",
  appId: "1:296135017295:web:d48deb853a2e980c0b7b3a",
  measurementId: "G-TGMR5J6R5D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
myFunction();
//Función login de página Bienvenida
document.getElementById("root").innerHTML= login(); 