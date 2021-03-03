import { showTemplate } from "../router.js";

export const wall = () => {
  const viewWall = document.createElement("div");
  viewWall.innerHTML = `
<header>
  <div class="panel">
   <a href="#/wall" title="Close" class="panel-close">&times;</a>
   <ul class="menu">
			<li><a href="#">Profile</a></li>
			<li><a href="#">Settings</a></li>
			<li><a href="#">Log out</a></li>
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
      `
      <h1 href="#/">PARENTS' WALL</h1>
      <div class="container">
        <div class="box" id="foto">
          <img src="images/04_Family_a.jpg"/>
        </div>
      </div> 
      <p>This is your wall</p>
      <br>
      <button id="new-post-button">Write a new post</button>
      <br>
      <button id="go-profile" href="#/profile">Go to your profile</button>
      <br>
      <button id="logout" href="#/">Log out</button>
      <br>
      <div id="post-container"></div>
      `;

  //Botón para escribir un nuevo post, que manda al 5_template_Create_Post.js
  const goPost = viewWall.querySelector("#new-post-button");
  goPost.addEventListener("click",() => {
    window.location.href = "#/post";
  });

  //Botón para ir al perfil, que manda al 4_template_Profile.js
  const goProfile = viewWall.querySelector("#go-profile");
  goProfile.addEventListener("click",() => {
    window.location.href = "#/profile";
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

  //Botón para salir, que manda al 1_template_Login.js
  const logout = viewWall.querySelector("#logout");
  logout.addEventListener("click",() => {
    firebase.auth().signOut().then(() => {
      console.log("Logged out");
      window.location.href = "#/";
    }).catch((error) => {
      console.log("Problem loging out");
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
      <div class="new-post">
        <p>${doc.data().Title}</p>
        <p>${doc.data().Text}</p>
        <br>
        <button>Like</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      `;
      console.log(doc.data());
    });
  });
}