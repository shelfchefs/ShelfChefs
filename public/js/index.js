// Initialize Firebase
var config = {
  apiKey: "AIzaSyCy-CTcLPsk8f7Q_tTfJ3S3Q_MuHOLLl-k",
  authDomain: "shelfchef-f0eb0.firebaseapp.com",
  databaseURL: "https://shelfchef-f0eb0.firebaseio.com",
  projectId: "shelfchef-f0eb0",
  storageBucket: "shelfchef-f0eb0.appspot.com",
  messagingSenderId: "292410947279"
};
firebase.initializeApp(config);

(function () {
  //Login Button
  $("#login-btn").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var email = $("#email").val().trim();
    var password = $("#password").val().trim();

    if (!email || !password) {
      $('#alertModalBody').text('Email and password required');
      $('#alertModal').modal('show');
      return;
    }
    //Sign in user
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        //Handle Errors here.
        $('#alertModalBody').text('Invalid email or password');
        $('#alertModal').modal('show');
        console.log('signIn error', error);
        return;
      });
  });


  //Create Account Button
  $("#create-btn").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var email = $("#email").val().trim();
    var password = $("#password").val().trim();


    if (!email || !password) {
      $('#alertModalBody').text('Email and password required to create an account.');
      $('#alertModal').modal('show');
      return;
    }

    //Create user
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log('register error', error);
        if (error.code === 'auth/email-already-in-use') {
          $('#alertModalBody').text("This email is already in use. Log in or try to register another email.");
          $('#alertModal').modal('show');
        } else if (error.code === 'auth/weak-password') {
          $('#alertModalBody').text("Password requires at least 6 characters");
          $('#alertModal').modal('show');
          return;
        }
      });
  });

  //Listen to auth state changes
  firebase.auth().onAuthStateChanged(function (user) {
    console.log("logged in", user);
    if (user) {
      document.location.href = "main.html";
    }
  });
})();