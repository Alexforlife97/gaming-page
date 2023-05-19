var myButton = document.getElementById("btn"); // this should target your button by its id

myButton.addEventListener("click", function(e) {

    e.preventDefault();

    // Get Form Input Values

    var fullName = document.getElementById("name").value; // This should target your full name input
    var email = document.getElementById("email").value; // This should target your email input
    var message = document.getElementById("message").value; // This should target your message input

    // Update Contact Card

    document.getElementById("postFullName").innerHTML = fullName; // This should target the post full name p tag
    document.getElementById("postEmail").innerHTML = email; // This should target the post email p tag
    document.getElementById("postMessage").innerHTML = message; // This should target the post message p tag
});