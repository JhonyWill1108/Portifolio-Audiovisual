document.addEventListener('DOMContentLoaded', () => {
    // Adiciona a classe 'is-visible' quando a seção entra na visualização
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, {
        threshold: 0.1 // 10% da seção visível para acionar a animação
    });

    const animatedSections = document.querySelectorAll('.about-section, .services-section, .portfolio-section, .testimonials-section, .contact-section');
    animatedSections.forEach(section => {
        section.classList.add('animated-section');
        observer.observe(section);
    });

    // Animação do header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(12, 12, 12, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            header.style.backgroundColor = 'rgba(12, 12, 12, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Smooth scroll para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
