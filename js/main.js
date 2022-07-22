
let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


function toggleBtn(x) {
  x.classList.toggle("change");
  const mobileNav = document.getElementById("myNav");
  mobileNav.classList.toggle('fullWidth');
 
}


  
