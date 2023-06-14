//@ts-check
import { Schema, model } from "mongoose";


const cartSchema = new Schema({
    products: {
        type:Array,
        default:[]
    }
})

export const CartsModel = model('carts', cartSchema)

