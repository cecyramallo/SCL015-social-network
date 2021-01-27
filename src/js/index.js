import { router, changeRoute } from "../router.js";

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const ir_google = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth().signInWithPopup(provider).then(function(result) {
   // This gives you a Google Access Token.
   var token = result.credential.accessToken;
   // The signed-in user info.
   var user = result.user;
   console.log(result);
   router('wall')
  });
}