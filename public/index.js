var firebaseConfig = {
    apiKey: "AIzaSyD8bKi9454qFmAMO1-Gj0gSaphDRH4ImIA",
    authDomain: "nurahealth-70126.firebaseapp.com",
    databaseURL: "https://nurahealth-70126.firebaseio.com/patients/2SGy9T61WvLhgSWzgyre",
    projectId: "nurahealth-70126",
    appId: "1:165901922315:web:c284949975ca3d645c570e",
    storageBucket: "nurahealth-70126.appspot.com",
};

if (firebase.apps.length === 0) {
    firebase.initializeApp({firebaseConfig});
}

var db = firebase.firestore();

// var docRef = db.doc("patients/new_Patient");
// var userName = document.querySelector("#usrName");
// //console.log(userName);
// var userPsw = document.querySelector("#usrPsw");
// var signUpButton = document.querySelector("#signUpButton");
//
// signUpButton.addEventListener("click", function() {
//   const userNameToSave = userName.value;
//   const pswToSave = userPsw.value;
//   console.log("I am going to save" + userNameToSave + " " + pswToSave+ " to Firestore");
//   docRef.set({
//     username: userNameToSave,
//     password: pswToSave
//   }).then(function() {
//     alert("Status saved!")
//     return;
//   }).catch(function(error){
//     console.log("Got an error: ", error)
//     return;
//   });
// })

function validate(){
    var inputUsername = document.getElementById("usrnme").value;
    var inputPassword = document.getElementById('psw').value;

    db.collection('patients').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        if (inputUsername == doc.data().username){
          console.log("Correct username")
          if (inputPassword == doc.data().password) {
            console.log("Worked");
            location.replace("https://nurahealth-70126.web.app/views/patient_profile.html");
          } else {
            console.log("not correct password");
          }
        } else {
          console.log("Not correct username");
        }
      })
    })
}
