var firebaseConfig = {
    apiKey: "AIzaSyATB9PSYE6P_U3p-3E1EsMFbEwGU2o8lgQ",
    authDomain: "car-racing-challenge-70571978.firebaseapp.com",
    databaseURL: "https://car-racing-challenge-70571978.firebaseio.com",
    projectId: "car-racing-challenge-70571978",
    storageBucket: "car-racing-challenge-70571978.appspot.com",
    messagingSenderId: "695415839376",
    appId: "1:695415839376:web:994834e33b1efcaa989615"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = + user_name + " Welcone to Lets Chat Web App ";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html"
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childkey = childSnapshot.key;
            Room_names = childkey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}