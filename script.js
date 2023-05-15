function clickMenu() {
    if (window.innerWidth <= 900) {
        var itens = document.getElementById("itens");
        if (itens.style.display === 'block') {
            itens.style.display = 'none';
        } else {
            itens.style.display = 'block';
        }
    }
}

function updateMenuOnResize() {
    if (window.innerWidth > 900) {
        window.location.reload(); // Recarrega a página
    }
}

window.addEventListener('resize', updateMenuOnResize);