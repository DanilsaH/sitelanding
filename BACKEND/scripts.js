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
