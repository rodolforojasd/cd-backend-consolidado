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






async function connectMongo(){
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