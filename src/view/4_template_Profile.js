import { showTemplate } from "../router.js";

export const profile = () => {
  const viewProfile = document.createElement("div"); 
  viewProfile.innerHTML = `
      <p>Welcome! This is your profile</p>
      <br>
      <button id="go-wall">Go to your wall</button>
    `
  const goWall = viewProfile.querySelector("#go-wall");
  goWall.addEventListener("click",() => {
    window.location.href = "#/wall";
  });
  
  return viewProfile;
}; 