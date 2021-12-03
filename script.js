const firebaseConfig = {
    apiKey: "AIzaSyAGgsjWwCC75Ff05Nr4V43Z8zsR0uCZ6X8",
    authDomain: "instagram-login-screen.firebaseapp.com",
    projectId: "instagram-login-screen",
    storageBucket: "instagram-login-screen.appspot.com",
    messagingSenderId: "774679228936",
    appId: "1:774679228936:web:caf050a1a678e25a5e17bd"
  };

  
  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  
  // Initialize Firebase


    let userID = parseInt(Math.random()*100000000)

    let userData = {
        email : document.getElementById('email'),
        fullName : document.getElementById('fullName'),
        username : document.getElementById('username'),
        password : document.getElementById('password'),
    }//Pegando dados dos inputs


    function createUser(e){
        e.preventDefault()
        db.collection('users').doc(`${userData.username.value} - ${userID}`).set({
            email: userData.email.value,
            fullName: userData.fullName.value,
            username: userData.username.value,
            password: userData.password.value,
        })
        .then((user)=>{
            console.log('Sucess create acount!')
            console.log(user)
        })
        .catch(err=>{console.log(err)})
    }
   
        

let button = document.getElementById('singUpButton')
button.addEventListener('click', createUser)
