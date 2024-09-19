const socket = io();

socket.on('connect', () => {
  console.log("username",username)
  const username = document.getElementById('username').innerText;
  socket.emit('username', username);
});

//ü50
socket.on('connect_error', (err) => {
    console.log(`connect_error due to ${err.message}`);
  });
  