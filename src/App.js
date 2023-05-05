import ProductManager from "./ProductManager/ProductManager.js"
import express from "express"


const PORT = 8080

const app = express()
app.use(express.urlencoded({extended:true}))



const  productManager = new ProductManager



 app.get('/products',async(req,res)=>{
    
    let limit = req.query.limit 
    let  products = await productManager.getProducts()
    if(!limit||limit < 0) return res.send({products}) 
    let limitedProducts = products.slice(0,limit-1)
    res.send({limitedProducts})
 })

app.get('/products/:pid',async (req,res) =>{
    
    let id = req.params.pid
    try{
        const product = await productManager.getProductById(id)
        return res.send({product})
    }catch(e){
        console.log(e)
        return res.send({error:'Product not found'})
    }
    

})


app.listen(PORT,()=>console.log('Port 8080 is up!'))