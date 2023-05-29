import {Cart} from './Cart.js'
import fs from "fs/promises"



 class CartManager {


    constructor() {
        this.carts = []
        this.path = './data/carts.json'
    }


    async loadCarts(){
    debugger
        let  inJSON = await fs.readFile(this.path)
        let data = await JSON.parse(inJSON)
        this.carts = data
        }

    async saveCarts(){
        let data = this.carts
        let inJSON =  JSON.stringify(data, null,'\t')
        fs.writeFile(this.path,inJSON)
    }




     async getCarts() {
     debugger
        await this.loadCarts()
        console.log(this.carts)
        return this.carts
    }

    async addCart(){
        debugger
        await this.loadCarts()
        let id = 0   
        if(this.carts.length === 0){
            id = 1
            let  cart = new Cart ( id,[])
            this.carts.push(cart) 
        }                                                                         
        if(this.carts.length > 0){
            id = this.carts.length + 1
            let  cart = new Cart ( id,[])
            this.carts.push(cart) 
        }
        
        this.saveCarts()
    }

    
    async getCartById(id) {
        await this.loadCarts()
        const searched = this.carts.find(c => c.id == id)
        if (!searched) {
            throw new Error('id no encontrado')
        }
        return searched
    }

    async getCartProductById(id, productId) {
        let cart= await this.getCartById(id)
        const searched = cart.products.find(p => p.id === productId)
        if (!searched) {
            throw new Error('product not found')
        }
        return searched
    }

    async countCartItems(id){
  
        let cart = await this.getCartById(id)
        let cartCounter= 0
        if(cart.products.length > 0){
             cartCounter = cart.products.reduce(
                (accumulator, p) => accumulator + p.quantity, 0)
                return cartCounter
        }else{
            cartCounter = 0
            return cartCounter
        }
  
    }

   async  getCartTotal(){
        let cart = await getCartById(id)
        let cartTotal = cart.products.reduce(
            (accumulator, p) => accumulator + (p.quantity*p.price), 0)
            return cartTotal
    }  
    

   async addToCart(id, productId, pm, quantity){
            
       this.loadCarts()
        let cartCounter = 0
        
        quantity = 1
        const productToAdd = await pm.getProductById(productId)
        let stock = productToAdd.stock

        const newCart = await this.getCartById(id)

        const inCart = newCart.products.findIndex(p => p.id === productToAdd.id)
        
        if(inCart === -1){
            const newProduct= {id: productToAdd.id, quantity: quantity }
            newCart.products.push(newProduct)

                
        }else{
            const newProduct= {id: productToAdd.id, quantity: newCart.products[inCart].quantity+quantity}
            newCart.products[inCart] = newProduct
        }

        this.saveCarts()
        cartCounter = this.countCartItems(id)
    
        return cartCounter
   }

    

    
    async deleteCartById(id) {
        this.loadCarts
        const indexSearched = this.carts.findIndex(c => c.id === id)
        
        if (indexSearched === -1) {

            throw new Error('product not found')

        }else if(indexSearched === this.carts[this.carts.length-1]) {

            this.carts.pop()
            this.saveCarts()

        }else if (indexSearched===0){

            this.carts.shift()
            const idUpdated = this.carts.map((cart)=> cart.id = cart.id -1)
            this.carts = idUpdated
            this.saveCarts()

        }else{

            const [deleted] = this.carts.splice(indexSearched, 1)
            const idUpdated= this.carts.map((cart)=> cart.id > indexSearched+1 ? cart.id = cart.id -1: cart.id = cart.id)
            this.carts = idUpdated
            await this.saveCarts()
            return deleted
        }
           
    }

    updateCart(newCart,name) {
        name = this.nameStorageCart()
        let cart = this.getStorageCart(name)
        this.saveStorageCart(name,newCart)
        
    }



    async deleteCartProductById(id,productId) {
        
        let cart = await this.getCartById(id)
        let newCart = []
        let deleted = {}
        let indexSearched = cart.products.findIndex(product => product.id === productId)
        if (indexSearched === -1) {
            throw new Error('product not found')
        }
        if(cart.products.length === 0){
            cart.products=[]
            newCart=cart
        }else if(indexSearched === 0 && cart.products.length > 0){
           
            newCart =  cart.products.shift()
        }else if(indexSearched === cart.products[cart.products.length-1]){
           
            newCart= cart.products.pop()
        }else{
            deleted = cart.products.splice(indexSearched, 1)
            newCart = cart
        }
        this.carts[id-1]= newCart
        this.saveCarts()

    }



     reset() {
        this.carts = []
       
    }
}

export const cartManager =  new CartManager