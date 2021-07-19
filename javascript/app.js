/* ===Menu Show=== */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('menu-id','nav-id')

//Header baground when scrolled.

$(document).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 20) {
           $(".header-class").css("box-shadow","0 8px 6px rgb(0,0,0,0.1)");
          
       }
       else {
           $(".header-class").css("box-shadow","none");
           
       }
    })
  })
  /*menu disappearing after clicking link*/

  $('.linka').on("click", function() {
    const menu = document.getElementById('nav-id')
    menu.classList.toggle('show');
  });

  /* Project section */

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners

nextBtn.addEventListener('click',()=>{
    if( counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
  

//Scrolling animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home_data',{}); 
sr.reveal('.home_img_class',{delay: 200}); 
sr.reveal('.home_social',{ interval: 200}); 

/*Scroll About*/

sr.reveal('.aboutimgdiv',{delay:100})
sr.reveal('.aboutcontent')

/*Scroll Skills */

sr.reveal('.skillsmenu',{delay:200})

/*Scroll projects*/
sr.reveal('.carousel-container',{delay:200});

/* Scroll Contact */
sr.reveal('.form-wrapper',{delay:200});


/*Mail part*/

$(document).ready(function() {
    $('#contact-form').submit(function(e) {
      var name    = document.getElementById('inputName');
      var email   = document.getElementById('inputEmail');
      var message = document.getElementById('inputMessage');
  
      if (!name.value || !email.value || !message.value) {
        alertify.error("Please check your entries");
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: 'https://formspree.io/f/mknpqakd',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.success("Message sent");
      }
    });
  });

