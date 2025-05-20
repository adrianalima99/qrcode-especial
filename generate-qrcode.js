const QRCode = require('qrcode');

// Gera QR Code que abre DIRETO na mensagem
QRCode.toFile('./assets/qrcode-pronto.png', 'https://adrianalima99.github.io/qrcode-especial/', {
    color: {
        dark: '#0A2463',  // Azul escuro
        light: '#FFFFFF'  // Fundo branco
    },
    width: 400,
    margin: 2,
    errorCorrectionLevel: 'H'
}, (err) => {
    if (err) {
        console.error('Erro:', err);
        return;
    }
    console.log('✅ QR Code gerado com sucesso!');
    console.log('📁 Arquivo: assets/qrcode-pronto.png');
    console.log('🔗 Direto para: https://adrianalima99.github.io/qrcode-especial/');
});