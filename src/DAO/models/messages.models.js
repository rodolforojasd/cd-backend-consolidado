
//@ts-check
import { Schema, model } from "mongoose";


const messageSchema = new Schema({
    message: String,
    user:String,
})

export const MessageModel = model('messages', messageSchema)

