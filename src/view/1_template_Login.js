import { showTemplate } from "../router.js";
import { go_google } from "../js/functions.js";
import { go_facebook } from "../js/functions.js";

export const login = () => {
  const viewLogin = document.createElement("div"); 
  viewLogin.innerHTML = `
      <h1 href="#/">PARENTBOOK</h1>
      <div class="container">
        <div class="box">
          <img src="images/04_Family_a.jpg"/>
        </div>
      </div> 
      <containerLogin class="containerLogin">
        <input type="email" class="input_name" name="name" id="name" placeholder="E-mail"/>
        <input type="password" class="input_name" name="name" id="name" placeholder="Password"/>
        <button class="buttonLogin">Log in</button>
        <p>Or log in with</p>
        <containerIcons class="containerIcons">
          <icons class="socialIcons" id='iconGoogle'><img src="images/02_Google_a.png" /></icons>
          <icons class="socialIcons" id='iconFacebook'><img src="images/01_Facebook.png" onclick="go_facebook() /"></icons>
        </containerIcons>
        <p id='signup'>Don't have an account yet? Sign up!</p>
      </containerLogin>
      `;
      
  const iconGoogle = viewLogin.querySelector("#iconGoogle");
  iconGoogle.addEventListener("click",() => {
    go_google(showTemplate());
    window.location.href = "#/wall";
  });

  // const iconFacebook = viewLogin.querySelector("#iconFacebook");
  // iconFacebook.addEventListener("click",() => {
  //   go_facebook(showTemplate());
  //   window.location.href = "#/wall";
  // });

  const login = viewLogin.querySelector("#signup");
  login.addEventListener("click", () => {
    window.location.href = "#/signup";
  });
  
  return viewLogin;
};