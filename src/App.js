
import express from "express"
import productsRouter from "./routes/products.router.js"
import cartsRouter from "./routes/carts.router.js"



const PORT = 8080

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.listen(PORT,()=>console.log(`Listening http://localhost:${PORT}`))

app.use("/products", productsRouter)

app.use("/carts",cartsRouter)
