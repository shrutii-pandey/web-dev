// 
function onSignIn(googleUser) {
    // basic profile values are stored in variable profile
    var profile = googleUser.getBasicProfile();


    // displaying data using jquery
    $("#name").text(profile.getName());
    // text is the data type and data is stored in variable profile 
    $("email").text(profile.getEmail());
    // case sensitive
    $("#image").attr('src',profile.getImageUrl());
    // attr is attribute since image is an attribute 
    $(".data").css("display","block");
    // to display the data upon clicking signin button
    $(".g-signin2").css("display","none");
    // to hide sign in button after successfully signin



        // // displaying on screen using console.log
        // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

}       
        //sign out function
        function signOut() {
          var auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut().then(function () {
            // console.log('User signed out.');
            alert("You have been signed out successfully")
            // after sign out display sign in button again
            $(".g-signin2").css("display","block")
            // hide data field
            $(".data").css("display","none");
          });
        } 
