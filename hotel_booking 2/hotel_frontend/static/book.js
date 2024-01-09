let slideIndex = 1;
showSlides(slideIndex);
setInterval(function() {
   showSlides(slideIndex);
   slideIndex = slideIndex + 1;
   if (slideIndex == 4) {
     	slideIndex =  0;
   }
},5000);
function plusSlides(n){
   showSlides(slideIndex += n);
}
function currentSlide(n){
   showSlides(slideIndex = n);
}
function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("manual-btn");
   if (n > slides.length) {slideIndex = 1}    
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
}
function undisplay_menu(){
   document.querySelector("div.menu-left").style.display = "none";
}
function display_menu(){
   document.querySelector("div.menu-left").style.display = "flex";
}