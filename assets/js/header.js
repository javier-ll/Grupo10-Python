// Header
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('header2');
        } else {
            $('header').removeClass('header2');
        }
    });
});

// Botones Header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Carrusel
var counter = 1;
var maxImages = 3; // Cantidad de imágenes en el carrusel
var intervalTime = 4000;

setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > maxImages) {
        counter = 1;
    }
}, intervalTime);
