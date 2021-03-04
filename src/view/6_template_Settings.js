import { showTemplate } from "../router.js";

export const settings = () => {
  const viewSettings = document.createElement("div"); 
  viewSettings.innerHTML = `
      <p>These are your settings</p>
      <br>
      <button id="go-wall">Go to your wall</button>
    `
  const goWall = viewSettings.querySelector("#go-wall");
  goWall.addEventListener("click",() => {
    window.location.href = "#/wall";
  });
  
  return viewSettings;
};