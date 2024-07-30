// script.js

// Quando o usuário rolar a página 20px para baixo do topo, mostra o botão
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Quando o botão é clicado, volta ao topo
document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
