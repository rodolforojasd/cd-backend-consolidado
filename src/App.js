
import express from "express"
import {productsRouter} from "./routes/products.router.js"


const PORT = 8080

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))


app.listen(PORT,()=>console.log('Port 8080 is up!'))

app.use("/products", productsRouter)
app.use("cart/",cartRouter)