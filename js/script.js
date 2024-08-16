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





document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var name = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    fetch("http://localhost:3000/submit", {  // Mudança aqui para usar o proxy
        method: "POST",
        body: JSON.stringify({name: name, email: email}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === "success") {
            alert("Informações enviadas com sucesso!");
        } else {
            alert("Sucesso: " + data.message);
        }
        document.getElementById("userForm").reset();
    })
    .catch(error => {
        alert("Erro ao enviar informações. Tente novamente.");
        console.error("Error:", error);
    });
});

