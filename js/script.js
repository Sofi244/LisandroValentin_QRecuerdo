window.onload = () => {
    console.log("¡Invitación de Lisandro lista!");
};

// CORRECCIÓN: Abril es el mes 3 (0=Ene, 1=Feb, 2=Mar, 3=Abr)
const fechaCumple = new Date(2026, 3, 18, 12, 0).getTime(); 

const timer = setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = fechaCumple - ahora;

    // Cálculos de tiempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    // Si los elementos existen, inyectar el tiempo
    if (document.getElementById("days")) {
        document.getElementById("days").innerText = dias > 0 ? dias.toString().padStart(2, '0') : "00";
        document.getElementById("hours").innerText = horas > 0 ? horas.toString().padStart(2, '0') : "00";
        document.getElementById("minutes").innerText = minutos > 0 ? minutos.toString().padStart(2, '0') : "00";
    }

    // Si la fecha ya pasó
    if (distancia < 0) {
        clearInterval(timer);
        const container = document.querySelector(".countdown-container");
        if (container) {
            container.innerHTML = "<h3>¡LLEGÓ EL DÍA! 🥳</h3>";
        }
    }
}, 1000);

function verMapa() {
    // Esta es la forma más segura de linkear a Google Maps
    const direccion = "España 131, Azul, Buenos Aires";
    const url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(direccion);
    window.open(url, '_blank');
}

function comenzar() {
    const audio = document.getElementById('musica');
    const musicBtn = document.getElementById('music-btn');
    
    audio.play();
    
    // Mostramos el botón de control una vez que entran
    musicBtn.style.display = 'flex';

    const overlay = document.getElementById('overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
}

// Lógica para el botón de pausa/play
document.getElementById('music-btn').addEventListener('click', function() {
    const audio = document.getElementById('musica');
    const icon = document.getElementById('music-icon');
    
    if (audio.paused) {
        audio.play();
        icon.innerText = '⏸️';
    } else {
        audio.pause();
        icon.innerText = '▶️';
    }
});