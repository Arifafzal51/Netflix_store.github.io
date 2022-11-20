import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAc1SYN-ZWAl3j_5Kdlbxvl01_md7AQR4w",
  authDomain: "my-project1-fe070.firebaseapp.com",
  projectId: "my-project1-fe070",
  storageBucket: "my-project1-fe070.appspot.com",
  messagingSenderId: "1063025433223",
  appId: "1:1063025433223:web:d8f6a7541eb213588c7622"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('reg-btn') .addEventListener('click' , function(){
document.getElementById('register-div').style.display="inline";
document.getElementById('login-div').style.display="none";
});


document.getElementById("log-btn").addEventListener('click' , function(){
document.getElementById("register-div").style.display="none";
document.getElementById("login-div"). style.display="inline";
});    


document.getElementById("login-btn").addEventListener('click', function(){
    const loginEmail= document.getElementById("login-email").value;
    const loginPassword =document.getElementById("login-password").value;
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
    const user = userCredential.user;
    window.location.replace("../index.html");
    
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
    });
});


    document.getElementById("register-btn").addEventListener('click', function(){
        const registerEmail = document.getElementById("register-email").value;
        const registerPassword = document.getElementById("register-password").value;
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
        const user = userCredential.user;
        document.getElementById("result-box").style.display="inline";
        document.getElementById("register-div").style.display="none";
        document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById("result-box").style.display="inline";
        document.getElementById("register-div").style.display="none";
        document.getElementById("result") .innerHTML="Sorry ! <br>"+errorMessage;
        });
});

document.getElementById("log-out-btn").addEventListener('click' , function(){
  document.getElementById("result-box").style.display="none";
  document.getElementById("login-div").style.display="inline";
  });    


// document.getElementById("log-out-btn").addEventListener('click', function(){
//   signOut(auth)
//   .then(() => {
//   document.getElementById("result-box").style.display="none";
//   document.getElementById("login-div").style.display="inline";
//   })
//   .catch((error) =>{
//   document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
//   });
// });