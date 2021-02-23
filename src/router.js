import { login } from "./view/1_template_Login.js";
import { register } from "./view/2_template_Register.js";
import { wall } from "./view/3_template_Wall.js";
import { profile } from "./view/4_template_Profile.js";

export const showTemplate = (hash) => {
  const containerRoot = document.getElementById("root");
  containerRoot.innerHTML='';
  switch (hash) {
    case "login":
      containerRoot.appendChild(login());
      break;
    case "register":
      containerRoot.appendChild(register());
      break;    
    case "wall":
      containerRoot.appendChild(wall());
      break;
    case "profile":
      containerRoot.appendChild(profile());
      break;
    default:
      containerRoot.innerHTML = `<h2>Oops! 404: Not found</h2> <img src="./assets/front-end.png" id="front-end">`;
      break;
  }
};

export const changeRoute = (hash) => {
  if(hash==='#/'){
    return showTemplate(hash)
  } else if (hash === '#/signup') {
    return showTemplate(hash);
  } else if (hash === '#/wall') {
    return showTemplate(hash);
  } else if (hash === '#/profile') {
    return showTemplate(hash);
  } else {
    return showTemplate(hash);
  }
};