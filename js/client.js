const socket = io('http://localhost:8000');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

const append = (message,position) =>{
    const messageElement = document.createElement('div');
}
const name = prompt("Enter your name to join");
socket.emit('user-joined', name);
