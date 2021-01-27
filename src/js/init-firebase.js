const firebaseConfig = {
  apiKey: "AIzaSyCvQnHTUIHwdoXQAl5doWC-LgqYG9hk0VY",
  authDomain: "social-network-302813.firebaseapp.com",
  projectId: "social-network-302813",
  storageBucket: "social-network-302813.appspot.com",
  messagingSenderId: "296135017295",
  appId: "1:296135017295:web:d48deb853a2e980c0b7b3a",
  measurementId: "G-TGMR5J6R5D",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function ir_google() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().sigEnInWithPopup(provider).then(function(result) {
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     // The signed-in user info.
     var user = result.user;
     console.log(result);
    });
}

function ir_face() {
    auth.signOut();
    console.log('User signed out!');
    var provider = new firebase.auth.FacebookAuthProvider();
    // You can add additional scopes to the provider:
    provider.addScope('email');
    provider.addScope('user_friends');
    // Sign in with popup:
    auth.signInWithPopup(provider).then(function(result) {
      // The firebase.User instance:
      var user = result.user;
      // The Facebook firebase.auth.AuthCredential containing the Facebook
      // access token:
      var credential = result.credential;
    }, function(error) {
      // The provider's account email, can be used in case of
      // auth/account-exists-with-different-credential to fetch the providers
      // linked to the email:
      var email = error.email;
      // The provider's credential:
      var credential = error.credential;
      // In case of auth/account-exists-with-different-credential error,
      // you can fetch the providers using this:
      if (error.code === 'auth/account-exists-with-different-credential') {
        auth.fetchSignInMethodsForEmail(email).then(function(providers) {
          // The returned 'providers' is a list of the available providers
          // linked to the email address. Please refer to the guide for a more
          // complete explanation on how to recover from this error.
        });
      }
    });
}