const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    // socket.emit('newEmail', {
    //     from: 'Gautam@g.com',
    //     text: 'WTF',
    //     createdAt:123
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('create email' , newEmail); 
    // });

    // socket.emit('newMessage', {
    //     from: 'H',
    //     text: 's',
    //     createdAt: 123
    // });

    socket.on('createMessage', (message) => {
        console.log(message);
        // message.createdAt = new Date().getDate();
        // socket.emit('newMessage',  message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    });



    socket.on('disconnect', () => {
        console.log('Client disconnrcted');
    });
});

server.listen(port, () => {
    console.log(`Server up on port ${port}`);
});