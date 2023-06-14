
import express from "express"
import productsRouter from "./routes/products.router.js"
import cartsRouter from "./routes/carts.router.js"
import handlebars from "express-handlebars"
import path, { dirname } from "path"
import { __dirname } from "./utils.js"
import { Server } from "socket.io"
import { templateRouter } from "./routes/template.router.js"
import { socketRouter } from "./routes/socket.router.js"
import mongoose from "mongoose"


console.log(__dirname)
const PORT = 8080
//mongodb+srv://rodolforojasd:hIhyr2dqKtKbh3LZ@cluster0.urthovq.mongodb.net/?retryWrites=true&w=majority




const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.engine("handlebars", handlebars.engine())

app.set("views", __dirname + "/views")

app.set("view engine", "handlebars")

const httpServer = app.listen(PORT, () => {
  console.log(`Example app listening http://localhost:${PORT}`)
})

const socketServer = new Server(httpServer)
socketServer.on("connection", (socket) => {

  setInterval(() => {
    socket.emit("msg_back_front", {
      msg: "Connection is on from back server! " + Date.now(),
      from: "server",
    })
    socketServer.emit()
  }, 1000)


  socket.on("msg_front_back", (msg) => {
    console.log(msg);
  })
})

app.use("/products", productsRouter)

app.use("/carts",cartsRouter)


app.use("/template-products", templateRouter)


app.use("/test-socket", socketRouter)

app.get("*", (req, res) => {
  return res
    .status(404)
    .json({ status: "error", msg: "path not found", data: {} });
})
