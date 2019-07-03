var socket = io();

// escuchar eventos (on)
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información (emit)
socket.emit('enviarMensaje', {
    usuario: 'Claudio',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar información (on)
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ', mensaje);

});