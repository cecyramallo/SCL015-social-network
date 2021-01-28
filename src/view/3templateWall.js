import { router } from "../router.js";
export const wall = () => {
  const viewWall = document.createElement("div");
  viewWall.innerHTML = `
      <h1 href="#/">“PARENTBOOK all”</h1>
      <div class="container">
        <div class="box" id="foto">
          <img src="images/04_Family_a.jpg"/>
        </div>
      </div> 
      MURO DE MENSAJES
      `;

  const foto = viewWall.querySelector("#foto");

  foto.addEventListener("click", function (event) {
    router("register");
  });

  return viewWall;
};
