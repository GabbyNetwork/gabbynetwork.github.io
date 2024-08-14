// Cambio colore dei link all'hover
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff99cc';
        link.style.transition = 'color 0.3s ease';
        link.classList.add('bounce');
    });

    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
        link.classList.remove('bounce');
    });
});

// Aggiungere la classe bounce per animazioni al passaggio del mouse
navLinks.forEach(link => {
    link.addEventListener('animationend', () => {
        link.classList.remove('bounce');
    });
});
