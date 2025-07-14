window.onload = function () {
            
        // ======= ANIMAÇÃO AOS (Animate On Scroll) =========

        AOS.init({
         duration: 1000, // duração da animação
         once: true,     // anima só na primeira vez que aparece
         mirror: false,  // não inverte a animação
         offset: 50,     // distância do topo da tela para iniciar a animação
        });
        
        // Digitação animada do nome

        function typeWriter(elemento) {
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            textoArray.forEach((letra, i) => {
                setTimeout(() => elemento.innerHTML += letra, 100 * i)
            });
        }

        typeWriter(document.querySelector('#name'));
        typeWriter(document.querySelector('#animation'));

        // Typed.js

        var typed = new Typed("#typed", {
            strings: [
            'Sou um Técnico de Informática formado pela <span class="highlight"><a id="link-eterj" href="http://www.eterj.com.br" target="_blank">Escola Técnica do Rio de Janeiro</a></span> e busco vagas na área de <span class="highlight">desenvolvimento</span>.'
            ],
            typeSpeed: 40,
            backSpeed: 25,
            loop: false,
            showCursor: true
        });

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
};

// ======= FIM DO CÓDIGO ========