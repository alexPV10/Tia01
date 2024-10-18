// index.js
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('audio');

    // Intenta reproducir el audio al cargar la página
    function playAudio() {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Audio is playing');
            }).catch(error => {
                console.log('Autoplay was prevented, user interaction required.');
                // Intenta nuevamente después de un breve retardo
                setTimeout(() => {
                    playAudio();
                }, 1000); // Reintenta después de 1 segundo
            });
        }
    }

    playAudio();

    const slides = document.querySelector('.slides');
    let index = 0;
    const totalSlides = slides.children.length;

    setInterval(() => {
        index = (index + 1) % totalSlides;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }, 3000); // Cambia la diapositiva cada 3 segundos
});
