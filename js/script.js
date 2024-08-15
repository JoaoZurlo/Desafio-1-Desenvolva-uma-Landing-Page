document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('#nextBtn');
    const prevButton = document.querySelector('#prevBtn');

    const slideWidth = slides[0].getBoundingClientRect().width;

    let currentIndex = 0;

    const updateButtons = () => {
        prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
        nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
    };

    const moveToSlide = (track, currentIndex) => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            moveToSlide(track, currentIndex);
            updateButtons();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            moveToSlide(track, currentIndex);
            updateButtons();
        }
    });

    // Inicializa o estado dos botões
    updateButtons();
});
// script.js

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    fetch("https://cors-anywhere.herokuapp.com/YOUR_GOOGLE_APP_URL", {
        method: "POST",
        body: JSON.stringify({name: name, email: email}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "Success") {
            alert("Informações enviadas com sucesso!");
        } else {
            alert("Erro: " + data.message);
        }
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        alert("Erro ao enviar informações. Tente novamente.");
        console.error("Error:", error);
    });
});
