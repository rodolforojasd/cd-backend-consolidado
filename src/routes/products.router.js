import express from 'express';
import ProductManager from '../ProductManager/ProductManager';
const  productManager = new ProductManager

 const productsRouter = express.Router();

//  productsRouter.use((req,res,next)=>{
//     console.log("Time: ", Date.now());
//     next()
//  })

//  productsRouter.get("/",(req,res,next)=>{
//     console.log("Time: ", Date.now());
//     next()
//  })

 productsRouter.get("/products",(req,res,next)=>{
   res.send()
    next()
 })

 productsRouter.get('/products',async(req,res)=>{
    
    let limit = req.query.limit 
    let  products = await productManager.getProducts()
    if(!limit||limit < 0||limit >products.lenght) return res.status(202).send({products}) 
    let limitedProducts = products.slice(0,limit)
    res.status(202).send({limitedProducts})
 })

productsRouter.get('/:pid',async (req,res) =>{
    
    let id = req.params.pid
    try{
        const product = await productManager.getProductById(id)
        return res.status(202).send({product})
    }catch(e){
        console.log(e)
        return res.status(404).send({error:'Product not found'})
    }
    

})

productsRouter.get('/:category', async (req,res)=>{
        let category = req.params.category
        const products = await productManager.getProducts()
        let filtered = products.filter( (p)=> p.category === category)
        (filtered)? res.status(202).send({filtered}): res.status(404).send({error:"category not found"})
})

productsRouter.post("/", (req,res)=> {
    const product = req.body
    productManager.addProduct(req.body)
    
})

productsRouter.put("/:id", async (req,res)=> {
    const id = req.params.id
    const newProduct = req.body
    try{
        await productManager.updateProduct(id, newProduct)
        return res
        .status(201)
        .json({status:"success",msg:"product is updated", data: newProduct})

    }catch(e){
        console.log(e)
        return res
        .status(404)
        .json({status:"failure",msg:"product data is incorrect", data: newProduct})
    }
})

productsRouter.delete("/:id", async (req,res)=>{
    const id = req.params.id
    const product = await productManager.getProductById(id)
    try{
        await productManager.deleteProductById(id, product)
        return res
        .status(201)
        .json({status:"success",msg:"product was deleted", data: product })

    }catch(e){
        console.log(e)
        return res
        .status(404)
        .json({status:"failure",msg:"product not found", id: id})
    }
})

export default productsRouter
