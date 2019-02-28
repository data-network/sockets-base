const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrator',
        mensaje: 'Bienvenido a Data Network'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)
            // if (mensaje.usuario) {
            //     callback({
            //         resp: 'Todo salio bien!'
            //     });
            // } else {
            //     callback({
            //         resp: 'Algo salio MAL!!!'
            //     });
            // }
    });
});