document.addEventListener("DOMContentLoaded", function () {

    // ======= ANIMAÇÃO DE PARTÍCULAS =========
    
    particlesJS("particles-js", {
      particles: {
        number: { value: 100 },
        size: { value: 2 },
        color: { value: "#ffffff" },
        line_linked: {
          enable: true,
          distance: 180,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 10 }
        }
      },
      retina_detect: true
    });
});

window.onload = function () {
    // ======= TEMA CLARO/ESCURO =========
    const toggleInput = document.getElementById('theme-toggle');
    const root = document.documentElement;

    // Aplica tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        root.classList.add('light-theme');
        toggleInput.checked = true;
    } else {
        root.classList.remove('light-theme');
        toggleInput.checked = false;
    }

    // Alternar tema ao clicar
    toggleInput.addEventListener('change', () => {
        const isLight = toggleInput.checked;
        root.classList.toggle('light-theme', isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}