import { showTemplate } from "../router.js";

export const post = () => {
  const viewPost = document.createElement("div");
  viewPost.innerHTML = `
    <p>Create a new post</p>
    <br>
    <div id="">
      <input type="text" id="post-title" placeholder="Title of your post">
    </div>
    <br>
    <div id="">
      <input type="text" id="post-text" placeholder="Write your post">
    </div>
    <br>
    <button id="post-button">Post</button>
    <br>
    <button id="go-back-button">Go back</button>
    `;

  //Botón para postear, que manda al 3_template_Wall.js
  const goWall1 = viewPost.querySelector("#post-button");
  goWall1.addEventListener("click",() => {
    window.location.href = "#/wall";
  });

  const goWall2 = viewPost.querySelector("#go-back-button");
  goWall2.addEventListener("click",() => {
    window.location.href = "#/wall";
  });
  
  const db = firebase.firestore();

  const taskForm = viewPost.querySelector('#post-button');
  taskForm.addEventListener('click', e => {
    const title = document.getElementById('post-title').value;
    const text = document.getElementById('post-text').value;

    //Se crea la colección "posts" en Firebase
    db.collection("posts").add({
        Title: title,
        Text: text,
      })
      .then(function (post) {
        console.log("Document written with ID: ", post.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
    });
  })
  return viewPost;
}; 