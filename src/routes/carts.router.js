import express from 'express';
import {cartManager} from '../CartManager/CartManager.js'
 const cartsRouter = express.Router();



 cartsRouter.post("/", async (req,res)=> {
   debugger
    await cartManager.addCart()
    
    res
    .status(204)
    .json({status:"success",msg:"send cart products", data: cartManager.carts})

 })


  cartsRouter.get("/:cid", async (req,res)=> {
    const id = req.params.id
    
     try{
        const cart = await cartManager.getCartById(id)
        return res
        .status(204)
        .json({status:"success",msg:"send cart products", data: cart.products})
 
     }catch(e){
        console.log(e)
        return res
        .status(404)
        .json({status:"failure",msg:"cart id is incorrect", data: e})
     }
 })
 
 cartsRouter.post("/:cid/product/:pid", async (req,res)=> {
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
 
 export default cartsRouter
 

 
 

 