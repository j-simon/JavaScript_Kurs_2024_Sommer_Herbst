const socket = io();

socket.on('connect', () => {
  const username = document.getElementById('username').innerText;
  socket.emit('username', username);
  console.log("username per websocket gesendet",username)
});


socket.on('connect_error', (err) => {
    console.log(`connect_error due to ${err.message}`);
  });
  