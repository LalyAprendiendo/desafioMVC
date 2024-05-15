// 2) Crear un archivo server.js el cual, utilizando el módulo nativo "NET", se encargará de crear un servidor TCP.
//    Éste deberá atender las peticiones de los clientes y definir las siguientes rutas que utilizarán las
//funciones previamente mencionadas:  - getAll, getById, getByName, getByAuthor, create, deleteById.
const net = require("net");
const port = 3000;
const server = net.createServer();
const views = require("./views/index.js");

server.on("connection", (socket) => {
  console.log("Cliente conectado");

  socket.write("Bienvenido a mi servidor");

  socket.on("data", (mensajeCliente) => {
     const mensajeTexto = mensajeCliente.toString();
    
    const info = views.proArg(mensajeTexto);
    console.log("PROCESÉ LOS ARGUMENTOS Y LE ENVIO LA INFO AL CLIENTE");
    const infoAEnviar = JSON.stringify(info);
    socket.write(infoAEnviar);
  });
});

server.listen(port, () => {
  console.log("servidor escuchando en puerto " + port);
});

