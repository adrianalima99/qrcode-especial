const QRCode = require('qrcode');

// URL ABSOLUTAMENTE CORRETA
const siteUrl = 'https://adrianalima99.github.io/qrcode-especial/';

QRCode.toFile('./assets/qrcode.png', siteUrl, {
    color: {
        dark: '#0A2463',
        light: '#FFFFFF'  // Fundo branco para melhor leitura
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
    console.log('🔗 Link utilizado:', siteUrl);
});