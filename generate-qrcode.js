const QRCode = require('qrcode');

// URL direto para a página final (não precisa mais da tela do QR Code)
const siteUrl = 'https://adrianalima99.github.io/qrcode-especial/';

QRCode.toFile('./assets/qrcode-final.png', siteUrl, {
    color: {
        dark: '#0A2463',  // Azul escuro
        light: '#FFFFFF'  // Fundo branco
    },
    width: 400,
    margin: 2,
    errorCorrectionLevel: 'H'
}, (err) => {
    if (err) {
        console.error('Erro ao gerar QR Code:', err);
        return;
    }
    console.log('✅ QR Code gerado com sucesso!');
    console.log('🔗 Link direto para a mensagem:', siteUrl);
    console.log('\nAgora basta:');
    console.log('1. Enviar o arquivo assets/qrcode-final.png para ela');
    console.log('2. Quando escanear, verá direto sua mensagem linda!');
});