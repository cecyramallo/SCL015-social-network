import { showTemplate } from "../router.js";

export const wall = () => {
  const viewWall = document.createElement("div");
  viewWall.innerHTML = `
      <header>
        <div class="panel">
        <a href="#/wall" title="Close" class="panel-close">&times;</a>
        <ul class="menu">
            <li><a id="go-profile" href="#/profile">Profile</a></li>
            <li><a id="go-settings" href="#/settings">Settings</a></li>
            <li><a id="logout" href="#/">Log out</a></li>
        </ul>
        </div>
        <a href="#/wall" class="toggle">
        <img src= "../images/menu.png" width="35px" >
        </a>	
      </header>

      <div class="logo">
       <img src= "../images/parentbook.png">
      </div>

      <div id="wall-header">
      <h2>Welcome to your wall</h2>
      <button id="new-post-button">Write a new post</button>
      </div>

      <br>
      <div id="post-container"></div>
      `;

  //Botón para escribir un nuevo post, que manda al 5_template_Create_Post.js
  const goPost = viewWall.querySelector("#new-post-button");
  goPost.addEventListener("click",() => {
    window.location.href = "#/post";
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

  //Botón para ir al perfil, que manda al 4_template_Profile.js
  const goProfile = viewWall.querySelector("#go-profile");
  goProfile.addEventListener("click",() => {
    window.location.href = "#/profile";
  });

  //Botón para ir a la configuración, que manda al 6_template_Settings.js
  const goSettings = viewWall.querySelector("#go-settings");
  goSettings.addEventListener("click",() => {
    window.location.href = "#/settings";
  });

  //Botón para salir, que manda al 1_template_Login.js
  const logout = viewWall.querySelector("#logout");
  logout.addEventListener("click",() => {
    firebase.auth().signOut().then(() => {
      console.log("Logged out");
      window.location.href = "#/";
    }).catch((error) => {
      console.log("Problem logging out");
    });    
  });

  const db = firebase.firestore();
  displayPost(viewWall, db)

  return viewWall;
};

//Función con Firebase que muestra en el div vacío #post-container los títulos y textos de los post que se crean
export const displayPost = (container, db) => {
  const outputData = container.querySelector('#post-container');
  //Aqui tendria que ir el metodo para ordenar .orderBy y deberia quedar orderBy.get
  db.collection("posts").get().then((querySnapshot) => {
    outputData.innerHTML = ""
    querySnapshot.forEach((doc) => {
      outputData.innerHTML += `
      <div class="new-post-container">
        <p class="new-post-title">${doc.data().Title}</p>
        <p class="new-post-text">${doc.data().Text}</p>
        <br>
        <div class="wall-button-container">
          <button class="wall-button">Like</button>
          <button class="wall-button">Comment</button>
          <button class="wall-button">Edit</button>
          <button class="wall-button">Delete</button>
        </div>
      </div>
      `;
      console.log(doc.data());
    });
  });
}