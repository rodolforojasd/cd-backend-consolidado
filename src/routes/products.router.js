import express from 'express';
import {productManager} from '../DAO/fileSystemManagers/ProductManager/ProductManager.js';
import { productService } from '../services/product.service.js';
import  uploader  from "../utils.js"

 const productsRouter = express.Router();



//  productsRouter.get('/',async(req,res)=>{
    
//     let limit = req.query.limit 
//     let  products = await productManager.getProducts()
//     if(!limit||limit < 0||limit >products.lenght) return res.status(200).send({products}) 
//     let limitedProducts = products.slice(0,limit)
//     res.status(200).send({limitedProducts})
//  })

 productsRouter.get('/',async(req,res)=>{
    
    try {
       
        const  products = await productService.getAll()
        return res.status(200).json({
            status: 'success',
            msg: 'all products',
            data: products,
          });
        } catch (e) {
          console.log(e);
          return res.status(500).json({
            status: 'error',
            msg: 'Could not connect ',
            data: {},
          });
        }
 } ) 
    
    

// productsRouter.get('/:pid',async (req,res) =>{
    
//     let id = req.params.pid
//     try{
//         const product = await productManager.getProductById(id)
//         return res.status(200).send({product})
//     }catch(e){
//         console.log(e)
//         return res.status(404).send({error:'Product not found'})
//     }
    

// })

productsRouter.get('/:pid',async (req,res) =>{
    
    let id = req.params.pid
    try{
        const product = await productManager.getProductById(id)
        return res.status(200).send({product})
    }catch(e){
        console.log(e)
        return res.status(404).send({error:'Product not found'})
    }
    

})

// productsRouter.get('/:category', async (req,res)=>{
//         let category = req.params.category
//         const products = await productManager.getProducts()
//         let filtered = products.filter( (p)=> p.category === category)
//         (filtered)? res.status(202).send({filtered}): res.status(404).send({error:"category not found"})
// })


productsRouter.get('/:category', async (req,res)=>{
    let category = req.params.category
    const products = await productManager.getProducts()
    let filtered = products.filter( (p)=> p.category === category)
    (filtered)? res.status(202).send({filtered}): res.status(404).send({error:"category not found"})
})


// productsRouter.post("/", uploader.single("file"), async (req,res)=> {
//     if(!req.file){
//         return res.status(404).json({
//             status:"error",
//             msg:"file required to create product",
//             data:{},
//         })
//     }
//     try{
//        const {title,description,abv,price,category,thumbnails,db} = req.body
//         const  productAdded = productManager.getProducts()[productManager.products.lenght-1]
//         return res
//         .status(200)
//         .json({
//             status:"success",
//             msg: "product added",
//             data: {productAdded}
//         })
//     }catch(e){

//     }

// })

productsRouter.post("/", uploader.single("file"), async (req,res)=> {
    if(!req.file){
        return res.status(404).json({
            status:"error",
            msg:"file required to create product",
            data:{},
        })
    }
    try{
       const {title,description,abv,price,category,thumbnails,db} = req.body
        const  productAdded = productManager.getProducts()[productManager.products.lenght-1]
        return res
        .status(200)
        .json({
            status:"success",
            msg: "product added",
            data: {productAdded}
        })
    }catch(e){

    }

})

// productsRouter.put("/:id", async (req,res)=> {
//     const id = req.params.id
//     const newProduct = {id:id,...req.body}
//     try{
//         await productManager.updateProduct(id, newProduct)
//         return res
//         .status(200)
//         .json({status:"success",msg:"product is updated", data: newProduct})

//     }catch(e){
//         console.log(e)
//         return res
//         .status(404)
//         .json({status:"failure",msg:"product data is incorrect", data: newProduct})
//     }
// })

productsRouter.put("/:id", async (req,res)=> {
    const id = req.params.id
    const newProduct = {id:id,...req.body}
    try{
        await productManager.updateProduct(id, newProduct)
        return res
        .status(200)
        .json({status:"success",msg:"product is updated", data: newProduct})

    }catch(e){
        console.log(e)
        return res
        .status(404)
        .json({status:"failure",msg:"product data is incorrect", data: newProduct})
    }
})

// productsRouter.delete("/:id", async (req,res)=>{
//     const id = parseInt(req.params.id)
   
//     try{

//         const product = await productManager.deleteProductById(id)
//         return res
//         .status(200)
//         .json({status:"success",msg:"product was deleted", data: product })

//     }catch(e){
//         console.log(e)
//         return res
//         .status(404)
//         .json({status:"failure",msg:"product not found", id: id})
//     }
// })


productsRouter.delete("/:id", async (req,res)=>{
    const id = parseInt(req.params.id)
   
    try{

        const product = await productManager.deleteProductById(id)
        return res
        .status(200)
        .json({status:"success",msg:"product was deleted", data: product })

    }catch(e){
        console.log(e)
        return res
        .status(404)
        .json({status:"failure",msg:"product not found", id: id})
    }
})

export default productsRouter
