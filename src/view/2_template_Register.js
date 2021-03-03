import { showTemplate } from "../router.js";
import { go_google } from "../js/functions.js";

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
        <p>Or log in with</p>
        <containerIcons class="containerIcons">
          <icons class="socialIcons" id="iconGoogle"><img src="images/02_Google_a.png" /></icons>
          <icons class="socialIcons"><img src="images/01_Facebook.png" onclick="go_facebook()"/></icons>
        </containerIcons>
        <p id='login'>Do you already have an account? Log in!</p>
      </containerLogin>
      `;

  const iconGoogle = viewRegister.querySelector("#iconGoogle");
  iconGoogle.addEventListener("click",() => {
    go_google(showTemplate());
    window.location.href = "#/wall";
  });

  const goToLogin = viewRegister.querySelector("#login");
  goToLogin.addEventListener("click", () => {
    window.location.href = "#/";
  });

  const signUpButton = viewRegister.querySelector("#signup-button");
  signUpButton.addEventListener("click", createAccount); 
  

  const db = firebase.firestore();

  const taskForm = viewRegister.querySelector('#signup-button');
  taskForm.addEventListener('click', e => {
    let firstName = document.querySelector("#first-name").value;
    console.log(firstName);
    let lastName = document.querySelector("#last-name").value;
    console.log(lastName);
    let email = document.querySelector("#e-mail").value;
    console.log(email);
    
    //Se crea la colección "posts" en Firebase
    db.collection("users").add({
        FirstName: firstName,
        LastName: lastName,
        Email: email,
    })
      .then(function (currentUser) {
        let userId = firebase.auth().currentUser.uid;
        console.log(userId, "network");
        // console.log("User created", currentUser.uid);
      })
      .catch(function (error) {
        
    });
  })
  return viewRegister;
};

export const createAccount = () => {
  let email = document.querySelector("#e-mail").value;
  console.log(email);

  let password = document.querySelector("#password").value;
  console.log(password);

  let passwordRepeat = document.querySelector("#repeat-password").value;
  console.log(passwordRepeat);

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user);
    const userCreated = firebase.auth().currentUser;
    console.log(userCreated);
    userCreated.updateProfile({
       
    });
    userCreated.sendEmailVerification().then(function() {
      alert("E-mail sent"); 
    }).catch(function(error) {
      // An error happened.
    });
    // if (userCreated != null) {
    //   firstName = userCreated.displayName;
    //   console.log(firstName) 
    // }
    //     var name, email, photoUrl, uid, emailVerified;

// if (user != null) {
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
//   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                    // this value to authenticate with your backend server, if
//                    // you have one. Use User.getToken() instead.
// }
    

    
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


