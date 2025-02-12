$(document).ready(function () {
    // Smooth Scrolling for Navigation Links
    $('nav a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800
            );
        }
    });

    // jQuery Carousel
    let currentIndex = 0;
    const images = $("#carousel img");
    function showNextImage() {
        images.hide();
        currentIndex = (currentIndex + 1) % images.length;
        images.eq(currentIndex).fadeIn(1000);
    }
    setInterval(showNextImage, 3000);
});