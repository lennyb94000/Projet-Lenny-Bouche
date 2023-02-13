var video = document.querySelector('.video');
video.playbackRate = 0.5;


var loginBtn = document.getElementById("login-btn");
var loginForm = document.getElementById("login-form");
var closeBtn = document.getElementById("close-btn");

loginBtn.addEventListener("click", function() {
   loginForm.style.display = "block";
});

closeBtn.addEventListener("click", function() {
   loginForm.style.display = "none";
});

