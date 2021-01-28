import { login } from "./view/1templateLogin.js";
import { register } from "./view/2templateRegister.js";
import { wall } from "./view/4templateWall.js";

export const changeRoute=(hash)=>{
    if(hash==='#/'){
        return showTemplate(hash)
    }else return showTemplate(hash)
}

const showTemplate =(hash)=>{
    const containerRoot = document.getElementById("root");
    containerRoot.innerHTML='';
    switch (hash) {
        case "login":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1          
          containerRoot.appendChild(login());
          break;
        case "register":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          containerRoot.appendChild(register());
          break;    
        case "wall":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
          containerRoot.appendChild(wall());
          break;
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          containerRoot.appendChild(wall());
          break;
      }
}
export const router = (ruta) => {
  document.getElementById("root").innerHTML = "";
  switch (ruta) {
    case "login":
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      
      document.getElementById("root").appendChild(login());
      break;
    case "register":
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      document.getElementById("root").appendChild(register());
      break;

    case "wall":
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      document.getElementById("root").appendChild(wall());
      break;
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      document.getElementById("root").appendChild(wall());
      break;
  }
};
