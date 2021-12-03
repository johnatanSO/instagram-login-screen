const firebaseConfig = {
    apiKey: "AIzaSyAGgsjWwCC75Ff05Nr4V43Z8zsR0uCZ6X8",
    authDomain: "instagram-login-screen.firebaseapp.com",
    projectId: "instagram-login-screen",
    storageBucket: "instagram-login-screen.appspot.com",
    messagingSenderId: "774679228936",
    appId: "1:774679228936:web:caf050a1a678e25a5e17bd"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()

  let userID = parseInt(Math.random()*100000000)

  /*   let userSingUp = {
        email : document.getElementById('email'),
        fullName : document.getElementById('fullName'),
        username : document.getElementById('username'),
        password : document.getElementById('password'),
    } */
    console.log(userID)

    function createUser(e){
        e.preventDefault()
         db.collection('users').add({

            email: document.getElementById('email'),
            fullName: document.getElementById('fullName'),
            username: document.getElementById('username'),
            password: document.getElementById('password'),

        }).then((user)=>{
            console.log("Usuário cadastrado com sucesso!")
            console.log(user)
        }).catch(err=>{console.log(err)})
    }
   
        

let button = document.getElementById('singUpButton')
button.addEventListener('click', createUser)
