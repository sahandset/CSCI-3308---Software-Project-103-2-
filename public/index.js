
var firebaseConfig = {
    apiKey: "AIzaSyD8bKi9454qFmAMO1-Gj0gSaphDRH4ImIA",
    authDomain: "nurahealth-70126.firebaseapp.com",
    databaseURL: "https://nurahealth-70126.firebaseio.com/patients/2SGy9T61WvLhgSWzgyre",
    projectId: "nurahealth-70126",
    appId: "1:165901922315:web:c284949975ca3d645c570e",
    storageBucket: "nurahealth-70126.appspot.com",
};

// var firebase = require("firebase");
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp({firebaseConfig});
}
// firebase.analytics();

// const admin = require('firebase-admin');
// admin.initializeApp({
//   credential: admin.credential.applicationDefault()
// });

const db = firebase.firestore();

function validate(){
    var inputUsername = document.getElementById("usrnme").value;
    var inputPassword = document.getElementById('psw').value;
    // console.log("inputUsername", inputUsername);
    // console.log("inputPassword", inputPassword);
    let patientRef = db.collection('patients');
    console.log(patientRef);
    // let checkUsername = patientRef.where('activebool','==',true).get();
    // console.log(checkUsername);
    // let checkPassword = patientRef.where('password', '==', inputPassword).get();

    // console.log(checkPassword);

    if(checkUsername)
    {
        if(checkPassword)
        {
            // window.location.href("views/patient_profile.html")
            console.log("Worked");
        }
        else
        {
            console.log("Incorrect username or password");
        }
    }
    else
    {
        console.log("Incorrect username or password");
    }
}
