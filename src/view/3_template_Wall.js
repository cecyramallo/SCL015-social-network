import { showTemplate } from "../router.js";
//import { profile } from "./view/4_template_Profile.js";

export const wall = () => {
  const viewWall = document.createElement("div");
  viewWall.innerHTML = `

<header>
  <div class="panel">
   <a href="#/wall" title="Close" class="panel-close">&times;</a>
   <ul class="menu">
			<li><a href="#">Profile</a></li>
			<li><a href="#">Settings</a></li>
			<li><a href="#">Logo ut</a></li>
	 </ul>
  </div>
   <a href="#/wall" class="toggle">
   <img src= "../images/menu.png" width="35px" >
  </a>
	
</header>
      <div class="logo">
       <img src= "../images/parentbook.png" width="40%" >
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

 //menu desplegable 
const button = viewWall.querySelector(".toggle");
const panel = viewWall.querySelector(".panel");
const close = viewWall.querySelector(".panel-close");

button.addEventListener("click", () => {
  panel.classList.toggle("open");
});

close.addEventListener("click", () => {
  panel.classList.toggle("close");
});
  return viewWall;
};
