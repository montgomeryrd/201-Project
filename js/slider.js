'use strict';

//slider js implementation
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

//add event listener to copyright symbol and toggle visibility class on footer
document.getElementById('hidden_footer_toggle').addEventListener('click', function(e) {
  e.preventDefault();
  var footerContainer = document.getElementById('hidden_footer_container');
  var footerSizing = document.getElementsByTagName('footer')[0];

  if (footerContainer.getAttribute('class') === 'inactive_footer') {
    footerContainer.setAttribute('class', 'active_footer');
    footerSizing.setAttribute('class', 'large_footer');
  } else {
    footerContainer.setAttribute('class', 'inactive_footer');
    footerSizing.setAttribute('class', 'small_footer');
  }

});
