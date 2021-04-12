// Node server which handle all socket io connections
const io = require('socket.io')(8000)

const users = {}

io.on('connection',socket =>{
    socket.on('user-joined',name =>{
        users[socket.id] = name;
        socket.broadcast.emit('new-user-joined',name)

    });

    socket.on('send',message =>{
        socket.broadcast.emit('recieve',{message:message,name :user[socket.id]})
    });
})