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

$(document).ready(function() {
    var biografia = $('.biografia');
    var btnLerMais = $('.btn-ler-mais');
    var btnLerMenos = $('.btn-ler-menos');
    
    btnLerMais.on('click', function() {
      biografia.css('max-height', 'none'); // Remove o limite de altura
      btnLerMais.hide(); // Esconde o botão "Ler mais"
      btnLerMenos.show(); // Mostra o botão "Ler menos"
    });
  
    btnLerMenos.on('click', function() {
      biografia.css('max-height', '280px'); // Restaura o limite de altura
      btnLerMenos.hide(); // Esconde o botão "Ler menos"
      btnLerMais.show(); // Mostra o botão "Ler mais"
    });
  
    // Verifica o estado inicial da altura da biografia
    if (biografia.css('max-height') === 'none') {
      btnLerMais.hide();
      btnLerMenos.show();
    } else {
      btnLerMais.show();
      btnLerMenos.hide();
    }
  });

  
  
  
  
