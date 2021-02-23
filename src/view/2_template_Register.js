import { showTemplate } from "../router.js";

export const register = () => {
  const viewRegister = document.createElement("div");
  viewRegister.innerHTML = `
      <h1 href="#/">PARENTBOOK register</h1>
      <div class="container">
        <div class="box">
          <img src="images/04_Family_a.jpg"/>
        </div>
      </div> 
      <containerLogin class="containerLogin">
        <input type="text" class="input_name" name="name" id="name" placeholder="First Name"/>
        <input type="password" class="input_name" name="name" id="name" placeholder="Last Name"/>
        <input type="text" class="input_name" name="name" id="name" placeholder="User Name"/>
        <input type="password" class="input_name" name="name" id="name" placeholder="Password"/>
        <button class="buttonLogin">Sign up</button>
        <p>Or sign up with</p>
        <containerIcons class="containerIcons">
          <icons class="socialIcons"><img src="images/02_Google_a.png" onclick="go_google()"/></icons>
          <icons class="socialIcons"><img src="images/01_Facebook.png" onclick="go_facebook()"/></icons>
        </containerIcons>
        <p id='login'>Do you already have an account? Log in!</p>
      </containerLogin>
      `;

  const login = viewRegister.querySelector("#login");
  login.addEventListener("click", () => {
    window.location.href = "#/";
  });

  return viewRegister;
};