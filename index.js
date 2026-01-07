// Seleciona os elementos
const menuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

// Adiciona evento de clique
menuBtn.addEventListener('click', () => {
    // Alterna a classe 'active' que muda o display de 'none' para 'flex' no CSS
    navMenu.classList.toggle('active');
    
    // Troca o ícone (opcional, visual sugar)
    const icon = menuBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.replace('ph-list', 'ph-x');
    } else {
        icon.classList.replace('ph-x', 'ph-list');
    }
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuBtn.querySelector('i').classList.replace('ph-x', 'ph-list');
    });
});