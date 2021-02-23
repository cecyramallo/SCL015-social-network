import { showTemplate } from "../router.js";
//import { profile } from "./view/4_template_Profile.js";

export const wall = () => {
  const viewWall = document.createElement("div");
  viewWall.innerHTML = `
      <h1 href="#/">PARENTS' WALL</h1>
      <div class="container">
        <div class="box" id="foto">
          <img src="images/04_Family_a.jpg"/>
        </div>
      </div> 
      <p>This is your wall</p>
      <br>
      <button id="go-profile" href="#/profile">Go to your profile</button>
      <button id="logout" href="#/">Log out</button>
      `;

  const goProfile = viewWall.querySelector("#go-profile");
  goProfile.addEventListener("click",() => {
    window.location.href = "#/profile";
  });
  
  const logout = viewWall.querySelector("#logout");
  logout.addEventListener("click",() => {
    window.location.href = "#/";
  });

  return viewWall;
};
