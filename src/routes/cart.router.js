import express from 'express';
import CartManager from '../CartManager/CartManager';
 const cartRouter = express.Router();

 const  cartManager = new cartManager
  
  cartRouter.put("/:cid", async (req,res)=> {
    const id = req.params.id
    
     try{
        const cart = await cartManager.getCartById(id)
        return res
        .status(204)
        .json({status:"success",msg:"cart is send", data: cart})
 
     }catch(e){
        console.log(e)
        return res
        .status(404)
        .json({status:"failure",msg:"cart id is incorrect", data: e})
     }
 })
 
 cartRouter.post("/:cid/product/:pid", async (req,res)=> {
    const productId = req.params.pid
    const cartId = req.params.cid
    try{
        await cartManager.addToCart(cartId,productId,productManager)
        return res
        .status(204)
        .json({status:"success",msg:"product added", data: this.carts[cartId-1].products})

    }catch(e){
        return res
        .status(404)
        .json({status:"failure",msg:"error:"+ e, data:null })
    }
     
 })
 
 
 
 cartRouter.delete("/:id", async (req,res)=>{
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
 
 export default cartRouter
 

 