var firebaseConfig = {
    apiKey: "AIzaSyDaRw6IHsTp_MOE2CR9YSVBjpC2CbMedrg",
    authDomain: "kwitter-5728c.firebaseapp.com",
    databaseURL: "https://kwitter-5728c.firebaseio.com",
    projectId: "kwitter-5728c",
    storageBucket: "kwitter-5728c.appspot.com",
    messagingSenderId: "308384185843",
    appId: "1:308384185843:web:8cda47f85c587b38e26686",
    measurementId: "G-963EPLC9KT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function add_username()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "add user"
    }); 
}