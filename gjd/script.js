// Funzione per creare l'effetto di spostamento delle lettere
const logo = document.querySelector('.logo');
const letters = logo.textContent.split('');
logo.innerHTML = '';

letters.forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    logo.appendChild(span);
});

const spans = document.querySelectorAll('.logo span');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    spans.forEach(span => {
        const rect = span.getBoundingClientRect();
        const distX = mouseX - (rect.left + rect.width / 2);
        const distY = mouseY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(distX * distX + distY * distY);

        // Maggiore è la distanza, minore è l'effetto
        const maxDistance = 100; // Riduciamo la distanza per un effetto più visibile
        const moveDistance = Math.max(maxDistance - distance, 0) / 5;

        const moveX = (distX / distance) * moveDistance;
        const moveY = (distY / distance) * moveDistance;

        span.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
