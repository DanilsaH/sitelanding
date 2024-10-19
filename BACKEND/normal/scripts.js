$(document).ready(function () {
    // Função que move a primeira imagem para o final
    function moveImages() {
        const firstImage = $('.carousel-images img:first');
        $('.carousel-images').animate({ left: '-=210px' }, 2000, function () {
            $(this).append(firstImage); // Move a primeira imagem para o final
            $(this).css('left', '0'); // Reseta a posição do contêiner
        });
    }

    // Chama a função de movimentação a cada 2 segundos
    setInterval(moveImages, 2000);
});





// Mensagens de tela animadas
window.addEventListener('DOMContentLoaded', (event) => {
    const promoText = document.querySelector('.promo-text');
    promoText.classList.add('animate__animated', 'animate__fadeInDown');

    // Mensagem de contato rápida
    setTimeout(() => {
        alert('Aproveite a promoção de pacotes estratégicos por 5 mil Kz!');
    }, 5000);
});


// Array de imagens de fundo para o carrossel
const banners = [
    'url("IIMG/banner1.jpg")',
    'url("IIMG/banner2.jpg")',
    'url("IIMG/banner3.jpg")'
];

// Seleciona o header
const header = document.getElementById('carousel-header');
let currentBanner = 0;

// Função para trocar o fundo do header
function changeBanner() {
    currentBanner = (currentBanner + 1) % banners.length; // Volta ao início após o último banner
    header.style.backgroundImage = banners[currentBanner];
}

// Troca de banner a cada 5 segundos (5000 ms)
setInterval(changeBanner, 5000);

// Define o primeiro banner ao carregar a página
window.onload = () => {
    header.style.backgroundImage = banners[currentBanner];
};


