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
        <input type="text" class="input_name" name="name" id="first-name" placeholder="First Name"/>
        <input type="text" class="input_name" name="name" id="last-name" placeholder="Last Name"/>
        <input type="email" class="input_name" name="name" id="e-mail" placeholder="E-mail"/>
        <input type="password" class="input_name" name="name" id="password" placeholder="Password"/>
        <input type="password" class="input_name" name="name" id="repeat-password" placeholder="Repeat password"/>
        <button class="buttonLogin" id="signup-button">Sign up</button>
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

  const loginButton = viewRegister.querySelector("#signup-button");
  loginButton.addEventListener("click", createAccount); 
  
  return viewRegister;
};

export const createAccount = () => {
  let firstName = document.querySelector("#first-name").value;
  console.log(firstName);
  
  let lastName = document.querySelector("#last-name").value;
  console.log(lastName);

  let emailRegister = document.querySelector("#e-mail").value;
  console.log(emailRegister);

  let passwordRegister = document.querySelector("#password").value;
  console.log(passwordRegister);

  let passwordRepeat = document.querySelector("#repeat-password").value;
  console.log(passwordRepeat);
}


