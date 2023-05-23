
import express from "express"
import productsRouter from "./routes/products.router.js"
import cartsRouter from "./routes/carts.router.js"



const PORT = 8080

const app = express()

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.listen(PORT,()=>console.log(`Listening http://localhost:${PORT}`))

app.use("/products", productsRouter)

app.use("/carts",cartsRouter)

/*import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import { petsRouter } from "./routes/pets.router.js";
import { productsRouter } from "./routes/products.router.js";
import { testPlantillaProducts } from "./routes/test-plantilla-products.router.js";
import { testSocketRouter } from "./routes/test-socket.router.js";

import { __dirname } from "./utils.js";
import { Server } from "socket.io";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

//CONFIG DEL MOTOR DE PLANTILLAS
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

const httpServer = app.listen(PORT, () => {
  console.log(`Example app listening http://localhost:${PORT}`);
});

const socketServer = new Server(httpServer);

socketServer.on("connection", (socket) => {
  //BACK MANDA MSGS AL FRONT
  setInterval(() => {
    socket.emit("msg_back_front", {
      msg: "hola mundo desde el back " + Date.now(),
      from: "server",
    });
    socketServer.emit();
  }, 1000);

  //BACK ATAJA LOS MSGS DEL FRONT
  socket.on("msg_front_back", (msg) => {
    console.log(msg);
  });
});

TODOS MIS ENDPOINTS TIPO API REST/JSON
app.use("/api/products", productsRouter);
app.use("/api/pets", petsRouter);

//QUIERO DEVOLVER HTML DIRECTO PAGINA COMPLETA ARMADA EN EL BACK
app.use("/test-plantilla-products", testPlantillaProducts);

//QUIERO DEVOLVER HTML DIRECTO PAGINA COMPLETA ARMADA EN EL BACK
app.use("/test-socket", testSocketRouter);

//OTROS ENDPOINTS
app.get("*", (req, res) => {
  return res
    .status(404)
    .json({ status: "error", msg: "no se encuentra esa ruta", data: {} });
}); */