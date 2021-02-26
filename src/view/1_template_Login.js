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
        <input type="email" class="input_name" name="name" id="e-mail" placeholder="E-mail"/>
        <input type="password" class="input_name" name="name" id="password" placeholder="Password"/>
        <button class="buttonLogin" id="login-button">Log in</button>
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

  const goToSignUp = viewLogin.querySelector("#signup");
  goToSignUp.addEventListener("click", () => {
    window.location.href = "#/signup";
  });

  const loginButton2 = viewLogin.querySelector("#login-button");
  loginButton2.addEventListener("click", enterAccount);
  
  return viewLogin;
};


export const enterAccount = () => {
  let email = document.querySelector("#e-mail").value;
  console.log(email);

  let password = document.querySelector("#password").value;
  console.log(password);
  
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user)
    window.location.href = "#/wall";
    // Signed in
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("User doesn´t exist");
  });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

