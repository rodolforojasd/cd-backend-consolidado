const socket = io();


setInterval(() => {
  socket.emit("msg_front_back", {
    msg: "hola mundo desde el front " + Date.now(),
    from: "usuario anonimo",
  });
}, 1000);


socket.on("msg_back_front", (msg) => {
  console.log(msg);
});