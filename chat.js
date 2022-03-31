function login(){
    var name=document.getElementById("username").value;
    localStorage.setItem("username",name);
    window.location="chat_room.html";
}