document.addEventListener('DOMContentLoaded', function() {
    // Configurações personalizadas (EDITE AQUI!)
    const config = {
        spotifyTrackId: '4ziqkaBXfo4GrmuF0gsNyi', // ID da música do Spotify
        imageUrl: 'img/sua-foto.jpg', // Imagem que vai aparecer
        message: 'Sempre que ouço essa música, penso em você. É a nossa música! ❤️\n\n', // Mensagem personalizada
    };

    // Elementos do DOM
    const qrcodeElement = document.getElementById('qrcode');
    const qrcodeContainer = document.getElementById('qrcode-container');
    const contentElement = document.getElementById('content');
    const messageElement = document.getElementById('message');
    const spotifyEmbedElement = document.getElementById('spotify-embed');

    // Simulação de escaneamento (ao clicar no QR Code)
    qrcodeElement.addEventListener('click', function() {
        // Mostrar conteúdo
        contentElement.classList.remove('hidden');
        contentElement.classList.add('visible', 'fade-in');
        
        // Definir mensagem personalizada
        messageElement.textContent = config.message;
        
        // Carregar música do Spotify
        spotifyEmbedElement.src = `https://open.spotify.com/embed/track/${config.spotifyTrackId}?utm_source=generator&theme=0`;
        
        // Esconder QR Code após "escaneamento"
        qrcodeContainer.style.opacity = '0';
        setTimeout(() => {
            qrcodeContainer.classList.add('hidden');
        }, 500);
    });
});