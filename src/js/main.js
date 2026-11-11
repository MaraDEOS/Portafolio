document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Menú Hamburguesa Responsive ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            hamburger.textContent = 'X';
        } else {
            hamburger.textContent = 'Menu';
        }
    });

    // Cerrar menú al hacer clic en un enlace (móvil)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.textContent = 'Menu';
        });
    });

    // --- 2. Modo Oscuro / Claro Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Verificar preferencia guardada previamente
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggle.textContent = currentTheme === 'dark' ? 'Claro' : 'Oscuro';
    } else {
        themeToggle.textContent = 'Oscuro';
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = 'Oscuro';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = 'Claro';
        }
    });

    // --- 3. Validación y Simulación de Envío del Formulario ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                formStatus.style.color = '#ef4444';
                formStatus.textContent = 'Por favor, completa todos los campos.';
                return;
            }

            // Simulación de envío exitoso
            formStatus.style.color = '#22c55e';
            formStatus.textContent = '¡Mensaje enviado con éxito! Gracias por contactarme.';
            contactForm.reset();

            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
    }
});