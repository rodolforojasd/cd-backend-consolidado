import { Schema, model } from "mongoose";

export const productModel = model= (
    "products",
    new Schema({
        code:{type: String, required:true, max:100},
        title:{type: String, required:true, max:100},
        description:{type: String, required:true, max:100},
        abv:{type:Number, required:true, max:100},
        price:{type: Number, required:true, max:100},
        status:{type:Boolean, required:true, max:100},
        stock:{type: Number, required:true, max:100},
        category:{type:String, required:true, max:100},
        thumbnail:{type: Array, required:true, max:100},
       
    })
)

