import { showTemplate } from "../router.js";

export const wall = () => {
  const viewWall = document.createElement("div");
  viewWall.innerHTML = `
      <h1 href="#/">PARENTS' WALL</h1>
      <div class="container">
        <div class="box" id="foto">
          <img src="images/04_Family_a.jpg"/>
        </div>
      </div> 
      MESSAGE WALL
      `;

  const foto = viewWall.querySelector("#foto");

  foto.addEventListener("click", function (event) {
    showTemplate("register");
  });

  return viewWall;
};
