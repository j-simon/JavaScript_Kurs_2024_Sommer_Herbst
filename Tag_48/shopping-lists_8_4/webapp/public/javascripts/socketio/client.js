const socket = io();

socket.on('connect', () => {
  const username = document.getElementById('username').innerText;
  socket.emit('username', username);
});

//ü50
socket.on('connect_error', (err) => {
    console.log(`connect_error due to ${err.message}`);
  });
  