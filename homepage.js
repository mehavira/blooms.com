var slideind = 1;
var one = document.getElementById('slide1');
var two = document.getElementById('slide2');
var three = document.getElementById('slide3');

showSlides(slideind);

function plusSlide(n) {
    showSlides(slideind += n);
}

function currentSlide(n) {
    showSlides(slideind += n);
}

function showSlides(n) {
    var i;
    var slides = [one, two, three];
    if (n > slides.length) {slideind = 1}
    if (n < 1) {slideind = slides.length}
    for (i=0; i<slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideind - 1].style.display = 'block';

}

var slide_ind = 1;
automaticShow();

function automaticShow() {
    var i;
    var slides = [one, two, three];
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slide_ind++;
    if (slide_ind > slides.length) {
        slide_ind = 1;
    }
    slides[slide_ind - 1].style.display = 'block';
    setTimeout(automaticShow, 5000);
}
