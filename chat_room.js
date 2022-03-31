
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVOHAvxp5HwFoc9N5-_gzbddETv_cVK48",
    authDomain: "well-eatery-bhavya-290.firebaseapp.com",
    databaseURL: "https://well-eatery-bhavya-290-default-rtdb.firebaseio.com",
    projectId: "well-eatery-bhavya-290",
    storageBucket: "well-eatery-bhavya-290.appspot.com",
    messagingSenderId: "96971041789",
    appId: "1:96971041789:web:a6c829b4ab4a4960378794"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function add_room(){
        room_name=document.getElementById("input_box").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location="chat_page.html";
  }
        
   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room name is "+Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        //End code
       
        document.getElementById("output").innerHTML+=row;
  });});}
  
  getData();
  
  function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("roomname",name);
        window.location="chat_page.html"
  }
  function logout(){
        localStorage.removeItem("roomname");
        localStorage.removeItem("username");
        window.location="index.html";
  }