import { router } from "../router.js";
import { ir_google } from "../js/index.js";

export const login = () => {
  const viewLogin = document.createElement("div");
  viewLogin.innerHTML = `

      <h1 href="#/">“PARENTBOOK”</h1>
      <div class="container">
        <div class="box">
          <img src="images/04_Family_a.jpg"/>
        </div>
      </div> 
      <containerLogin class="containerLogin">
        <input type="text" class="input_name" name="name" id="name" placeholder="User Name"/>
        <input type="password" class="input_name" name="name" id="name" placeholder="Password"/>
        <button class="buttonLogin">Log in</button>
        <p>Or log in with</p>
        <containerIcons class="containerIcons">
          <icons class="socialIcons" id='iconGoogle'><img src="images/02_Google_a.png" /></icons>
          <icons class="socialIcons"><img src="images/01_Facebook.png" onclick="ir_face()"/></icons>
        </containerIcons>
        <p id='login'>Don't have an account yet? Sign up!</p>
      </containerLogin>
      `;
      
  const iconGoogle = viewLogin.querySelector("#iconGoogle");

  iconGoogle.addEventListener("click",() => {
    ir_google()

  });
  const login = viewLogin.querySelector("#login");

  login.addEventListener("click", function (event) {
    router("register");
  });
  return viewLogin;
};

// const ir_goole = () => {
//   console.log("irgoogle");
// };