
import createInventory from "./helper/CreateInventory.js";
import crypto from 'crypto'
import fs from 'fs/promises'


class Product {
    constructor( id,code, title, description, abv, price, status, stock, category, thumbnail, db) {
       
        if (!title) throw new Error('falta un argumento title')
        if (!description) throw new Error('falta un argumento')
        if(Number.isNaN(price)||!price) throw new Error('falta un argumento price o es un tipo invalido')
        if(Number.isNaN(stock)||!stock) throw new Error('falta un argumento stock o es un tipo invalido')
        if (!category) throw new Error('falta el argumento category')
        // if (thumbnail.length === 0) throw new Error('falta un argumento thumbnail')

        this.id = id
        this.code=code
        this.title = title
        this.description = description
        this.abv=abv
        this.price= price
        this.status=status
        this.stock = stock
        this.category=category
        this.thumbnail=thumbnail
        this.db=db

    }
}

class ProductManager {


    constructor() {
        
        this.products = []
        this.path='./data/products.json'
    }
    async createPath(){
        await fs.appendFile(this.path,'[]',"utf-8")
    } 

    async loadProducts(){
    
        let  inJSON = await fs.readFile(this.path)
        let data = await JSON.parse(inJSON)
        this.products = data
        }
    
    
    async saveProducts(products){
        
        let data = this.products
        debugger
        let inJSON =  JSON.stringify(data, null,'\t')
        fs.writeFile(this.path,inJSON)

    }

    async getProducts() {
    debugger
        await this.loadProducts()
        return this.products
        
    }

    async getProductById(id) {
        await this.loadProducts()
        const searched = this.products.find(product => product.id === id)
        if (!searched) {
            throw new Error('product not found')
        }

        return searched
    }

    async addProduct(title,description,abv,price,stock,category,thumbnail,db){
    
        
        this.loadProducts()
        let id = null
        
        if(this.products.some((product)=> product.title===title||this.products.some((product)=> product.id===id))){
            console.log(title)
            throw new Error (`el producto "${title}" ya existe`)  
        }
        
        if(this.products.length > 0){
            id = this.products.length + 1
            let product = new Product (id,crypto.randomUUID(), title, description, abv, price, true, stock, category, thumbnail,db)
            this.products.push(product)
        }

        if(this.products.length === 0){
            id = 1
            let  product = new Product ( id,crypto.randomUUID(), title, description,abv, price, true, stock, category, thumbnail,db)
            this.products.push(product) 
        }
        console.log(this.products)
        this.saveProducts()
    }

    async updateProduct(id, newProduct) {
       await  this.loadProducts()

        const indexSearched = this.products.findIndex(product => product.id === id)
        if (indexSearched === -1) {
            throw new Error('product not found')
        }
        this.products[indexSearched] = newProduct
        this.saveProducts()
        return newProduct
    }

    async deleteProductById(id) {
       await this.loadProducts()
        const indexSearched = this.products.findIndex(p => p.id === id)
        
        if (indexSearched === -1) {

            throw new Error('product not found')

        }else if(indexSearched === this.products[this.products.length-1]) {

             this.products.pop()
             this.saveProducts()

        }else if (indexSearched===0){

            this.products.shift()
            const idUpdated = this.products.map((p)=> p.id = p.id -1)
            this.products = idUpdated
            this.saveProducts()

        }else{

            const [deleted] = this.products.splice(indexSearched, 1)
            const idUpdated= this.products.map((p)=> p.id > indexSearched+1 ? p.id = p.id -1: p.id = p.id)
            this.products = idUpdated
            this.saveProducts()
            return deleted
        }
        
    }
}

const productManager= new ProductManager
console.log(productManager.getProducts)


