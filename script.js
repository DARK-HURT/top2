document.addEventListener("DOMContentLoaded", function() {
    let countdownNumber = 3; // Comienza en 3 segundos
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        countdownElement.textContent = countdownNumber;
        if (countdownNumber > 0) {
            countdownNumber--;
            setTimeout(updateCountdown, 1000); // Actualiza cada segundo
        } else {
            countdownElement.textContent = "¡Ya!";
        }
    }

    updateCountdown(); // Inicia la cuenta regresiva
});

