var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se desconecto del servidor');
});

//Enviar info
socket.emit('enviarMensaje', {
    usuario: 'Luis Ayard',
    mensaje: 'Hola'
}, function(resp) {
    console.log('Se recibio el callback', resp);
});

//Escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Server Says: ', mensaje);
});