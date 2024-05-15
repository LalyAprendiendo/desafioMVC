// 3) Crear un archivo client.js, el cual, utilizando el módulo nativo "NET",
// se encargará de enviarle peticiones de información al servidor e imprimir los resultados obtenidos.
   
//    <!-- --- Formato del mensaje que envía el usuario: { action: <accion a realizar>,
// body: <informacion complementaria que se envía segun el tipo de accion>} --- -->

  // const data = { action: "create", body: book }
    //const data = { action: "read" }
    // const data = { action: "readOne", body: { id: "143774f5-bd5b-4acc-b7bf-40ed8af1ee5f" } }
    // const data = { action: "modify", body: book }
    // const data = { action: "delete", body: book.id }

    const net = require ("net")

    const port = 3000
    const client = new net.createConnection({ port: 3000 })
    
    client.on("connect", () => {
      //const data = { action: "modify", body: { id: "1", name: "nuevo" } }
      const data = { action: "delete", body: { id: "6" } }
      //const data = { action: "read" }
      //const data = { action: "readOne", body: { id: "14" } }
      //const data = { action: "author", body: {author: "George Orwell"} }
      //const data = { action: "name", body: {name: "El Señor de los Anillos"} }
      const messegeJSON = JSON.stringify(data)
      client.write(messegeJSON);
  })
  
  client.on("data", (mensajeDelServer) => {
      console.log("server dice " + mensajeDelServer);
  })
