
import express from "express"
import productsRouter from "./routes/products.router.js"
import cartsRouter from "./routes/carts.router.js"
import handlebars from "express-handlebars"
import path, { dirname } from "path"
import { __dirname, connectMongo  } from "./utils.js"
import { Server } from "socket.io"
import { templateRouter } from "./routes/template.router.js"
import { socketRouter } from "./routes/socket.chat.router.js"
import { connectSocket } from "./utils.js"



const PORT = 8080

const app = express()

connectMongo();

connectSocket(httpServer);

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.engine("handlebars", handlebars.engine())

app.set("views", __dirname + "/views")

app.set("view engine", "handlebars")

const httpServer = app.listen(PORT, () => {
  console.log(`Example app listening http://localhost:${PORT}`)
})





app.use("/products", productsRouter)

app.use("/carts",cartsRouter)


app.use("/template-products", templateRouter)


app.use("/chat", socketRouter)

app.get("*", (req, res) => {
  return res
    .status(404)
    .json({ status: "error", msg: "path not found", data: {} });
})
