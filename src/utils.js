import path from "path";
import { fileURLToPath } from "url";
import { MONGODB_51395 } from "./config/database.config";
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

debugger
console.log(__dirname)

import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const uploader = multer({ storage });


import { connect, Schema, model } from 'mongoose';

export async function connectMongo(){
  try{
    await connect(
      MONGODB_51395
    );
    console.log("plug to mongo")
  }catch(e){
    console.log(e)
    throw "cannot connect to the db"
  }
}



import { Server } from 'socket.io';
import { MessagelModel } from './DAO/models/messages.models';

export function connectSocket(httpServer) {
  const socketServer = new Server(httpServer);

  socketServer.on('connection', (socket) => {
    socket.on('msg_front_to_back', async (msg) => {
      const messageCreated = await MessagelModel.create(msg);
      const msgs = await MessagelModel.find({});
      socketServer.emit('msg_back_to_front', msgs);
    });
  });
}