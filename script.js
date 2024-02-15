// Countdown Timer
let timerInterval;

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            // Add your action when timer expires
        }
    }, 1000);
}

window.onload = function () {
    let tenMinutes = 60 * 10,
        display = document.querySelector('#minutes , #seconds');
    startTimer(tenMinutes, display);
};



//15sec Login Popup
 const loginPopup = document.querySelector(".login-popup");
  const close = document.querySelector(".close");


  window.addEventListener("load",function(){
 
   showPopup();
   // setTimeout(function(){
   //   loginPopup.classList.add("show");
   // },5000)

  })

  function showPopup(){
        const timeLimit = 15 // seconds;
        let i=0;
        const timer = setInterval(function(){
         i++;
         if(i == timeLimit){
          clearInterval(timer);
          loginPopup.classList.add("show");
         } 
         console.log(i)
        },1000);
  }


 // close.addEventListener("click",function(){
   // loginPopup.classList.remove("show");
  //});


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


   //Scroll Up

     window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 100) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  window.addEventListener('load', function() {
    // Smooth scrolling function
    function scrollToTop() {
      if (window.scrollY != 0) {
        window.scrollTo(0, 0);
      }
    }

    // Scroll to top after 15 seconds
    setTimeout(scrollToTop, 15000);
  });





//Firebase SetUp


 
 