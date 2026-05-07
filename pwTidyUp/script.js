document.addEventListener('DOMContentLoaded', () => {
    
    // Botón de descarga con feedback
    const downloadButton = document.querySelector('.download-btn');
    if (downloadButton) {
        downloadButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('¡PROTOCOLO INICIADO! 🚀 Gracias por descargar Tidy Up.');
        });
    }

    // Efecto de transparencia en el Navbar al hacer scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('shadow-xl', 'bg-white');
            nav.classList.remove('bg-white/90');
        } else {
            nav.classList.remove('shadow-xl', 'bg-white');
            nav.classList.add('bg-white/90');
        }
    });

    // Animación simple de aparición para las cajas al entrar en pantalla
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.valorant-box, .protocol-item').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});