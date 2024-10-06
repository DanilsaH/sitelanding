// script.js

// Espera o documento estar pronto para executar o script
document.addEventListener('DOMContentLoaded', function () {
    var whatsappButton = document.querySelector('.whatsapp-button');

    // Verifica a rolagem da página
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) { // Mostra o botão após rolar 200px
            whatsappButton.style.display = 'block';
        } else {
            whatsappButton.style.display = 'none';
        }
    });
});
// script.js

// Espera o documento estar pronto para executar o script
document.addEventListener('DOMContentLoaded', function () {
    var whatsappButton = document.querySelector('.whatsapp-button');

    // Verifica a rolagem da página
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) { // Mostra o botão após rolar 200px
            whatsappButton.style.display = 'block';
        } else {
            whatsappButton.style.display = 'none';
        }
    });
});
