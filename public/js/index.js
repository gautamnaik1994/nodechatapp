var socket = io();
socket.on('connect', function () {
    console.log("connected to server");
    // socket.emit('createEmail', {
    //     to: 'g@g.com',
    //     text: 'hey'
    // });

    // socket.emit('createMessage', {
    //     from: "gautam",
    //     text: "hhhhhhh"
    // });

});

socket.on('newMessage', function (message) {
    console.log(message);
});
socket.on('disconnect', function () {
    console.log("disconnected from server");
});

// socket.on('newEmail',function (email) {
//     console.log('New Email ', email);
// })