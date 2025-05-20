const QRCode = require('qrcode');

QRCode.toFile('./assets/qrcode.png', 'https://github.com/adrianalima99/qrcode-especial', {
    color: {
        dark: '#0A2463',  // Azul escuro
        light: '#D6F1FF'  // Fundo azul claro
    },
    width: 400,
    margin: 2
}, (err) => {
    if (err) throw err;
    console.log('QR Code gerado!');
});