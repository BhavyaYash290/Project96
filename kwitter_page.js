var firebaseConfig = {
    apiKey: "AIzaSyCVOHAvxp5HwFoc9N5-_gzbddETv_cVK48",
    authDomain: "well-eatery-bhavya-290.firebaseapp.com",
    databaseURL: "https://well-eatery-bhavya-290-default-rtdb.firebaseio.com",
    projectId: "well-eatery-bhavya-290",
    storageBucket: "well-eatery-bhavya-290.appspot.com",
    messagingSenderId: "96971041789",
    appId: "1:96971041789:web:a6c829b4ab4a4960378794"
  };
  
  firebase.initializeApp(firebaseConfig);
  
user_name=localStorage.getItem("username");

room_name=localStorage.getItem("room_name");


function send(){
    msg=document.getElementById("input_box").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("input_box").value="";
}

function getData(){
    firebase.database().ref("/"+room_name).on('value', function(snapshot){
        document.getElementById("output").innerHTML="";
        snapshot.forEach(function(childSnapshot){
            childKey=childSnapshot.key;
            childData=childSnapshot.val();
            if(childKey!="purpose"){
                firebase_message_id=childKey;
                message_data=childData;

                console.log(firebase_message_id);
                console.log(message_data);
                var name=message_data['name']
                var message=message_data['message'];
                var like=message_data['like'];
                name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
                message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
                like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'";
                span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like : "+like+"</span> </button><hr>";

                row=name_with_tag+message_with_tag+like_button+span_with_tag;
                document.getElementById("output").innerHTML=row;
            };
        });
    });
}

getData();

function updateLike(message_id){
    console.log("Cliked on like button : "+message_id);
    button_id=message_id;
    likes=document.getElementById("button_id").value;
    updated_likes=Number(likes)+1;
    console.log("updated likes are"+updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
    });
}

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}