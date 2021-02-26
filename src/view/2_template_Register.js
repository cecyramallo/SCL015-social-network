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

  const goToLogin = viewRegister.querySelector("#login");
  goToLogin.addEventListener("click", () => {
    window.location.href = "#/";
  });

  const signUpButton = viewRegister.querySelector("#signup-button");
  signUpButton.addEventListener("click", createAccount); 
  
  return viewRegister;
};

export const createAccount = () => {
  let firstName = document.querySelector("#first-name").value;
  console.log(firstName);
  
  let lastName = document.querySelector("#last-name").value;
  console.log(lastName);

  let email = document.querySelector("#e-mail").value;
  console.log(email);

  let password = document.querySelector("#password").value;
  console.log(password);

  let passwordRepeat = document.querySelector("#repeat-password").value;
  console.log(passwordRepeat);

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user)
    // Signed in
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("User already exists");
    // ..
  });
}


