
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

function validate(username, password){
    var inputUsername = username;
    var inputPassword = password;
    alert("inputUsername", inputUsername);
    alert("inputPassword", inputPassword);
    let patientRef = db.collection('patients');
    let checkUsername = patientRef.where('name', '==', inputUsername).get();
    let checkPassword = patientRef.where('password', '==', inputPassword).get();
    if(checkUsername)
    {
        if(checkPassword)
        {
            // window.location.href("views/patient_profile.html")
            alert("Worked");
        }
        else
        {
            alert("Incorrect username or password");
        }
    }
    else
    {
        alert("Incorrect username or password");
    }
  // .then(snapshot => {
  //   if (snapshot.empty) {
  //     console.log('No matching login.');
  //     return;
  //   }
  //
  //   snapshot.forEach(doc => {
  //     console.log(doc.id, '=>', doc.data());
  //   });
  // })
  // .catch(err => {
    // console.log('Error getting documents', err);
  // });
}
