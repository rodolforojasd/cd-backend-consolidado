import express from 'express';
import {cartManager} from '../CartManager/CartManager.js'
import { productManager } from '../ProductManager/ProductManager.js';
 const cartsRouter = express.Router();



 cartsRouter.post("/", async (req,res)=> {
   debugger
    await cartManager.addCart()
    const carts = cartManager.carts
    return res.status(200).json(
      {status:"success", msg:"send carts ", data: carts }
      )

 })


  cartsRouter.get("/:cid", async (req,res)=> {
    const id = req.params.id
    
     try{
        const cart = await cartManager.getCartById(id)
        return res
        .status(200)
        .json({status:"success",msg:"send cart products", data: cart.products})
 
     }catch(e){
        console.log(e)
        return res
        .status(404)
        .json({status:"failure",msg:"cart id is incorrect", data: e})
     }
 })
 
 cartsRouter.post("/:cid/product/:pid", async (req,res)=> {
    const productId = parseInt(req.params.pid)
    const cartId = parseInt(req.params.cid)
    try{
        const cartCounter = await cartManager.addToCart(cartId,productId,productManager)
        return res
        .status(200)
        .json({status:"success",msg:"product added", data: {cartId:cartId, cartItems: cartCounter}})

    }catch(e){
        return res
        .status(404)
        .json({status:"failure",msg:"error:"+ e, data:null })
    }
     
 })
 
 export default cartsRouter
 

 
 

 