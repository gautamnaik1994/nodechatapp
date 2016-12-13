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
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});
socket.on('disconnect', function () {
    console.log("disconnected from server");
});

// socket.emit('createMessage', {
//     from: 'Frank',
//     text: 'Hi'
// }, function (data) {
//     console.log('Got It ', data);
// });

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    },function (data) {
    console.log('Got It ',data);
    });
});