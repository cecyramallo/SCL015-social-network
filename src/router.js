import { login } from "./view/1_template_Login.js";
import { register } from "./view/2_template_Register.js";
import { wall } from "./view/3_template_Wall.js";
import { profile } from "./view/4_template_Profile.js";
import { post } from "./view/5_template_Create_Post.js";

export const showTemplate = (hash) => {
  const containerRoot = document.getElementById("root");
  containerRoot.innerHTML='';
  switch (hash) {
    case '':
      containerRoot.appendChild(login());
      break;
    case '#/':
      containerRoot.appendChild(login());
      break;
    case '#/signup':
      containerRoot.appendChild(register());
      break;    
    case '#/wall':
      containerRoot.appendChild(wall());
      break;
    case '#/profile':
      containerRoot.appendChild(profile());
      break;
    case '#/post':
      containerRoot.appendChild(post());
      break;
    default:
      containerRoot.innerHTML = `<h2>Oops! 404: Not found</h2>`;
  }
};

export const changeRoute = (hash) => {
  if (hash==='#/') {
    return showTemplate(hash);
  } else if (hash === '#/') {
    return showTemplate(hash);
  } else if (hash === '#/signup') {
    return showTemplate(hash);
  } else if (hash === '#/wall') {
    return showTemplate(hash);
  } else if (hash === '#/profile') {
    return showTemplate(hash);
  } else if (hash === '#/post') {
    return showTemplate(hash);
  } else {
    return showTemplate(hash);
  }
};