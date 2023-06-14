import express from 'express';
import {userManager} from '../userManager/userManager.js';
import  uploader  from "../utils.js"

 const usersRouter = express.Router();

//  usersRouter.use((req,res,next)=>{
//     console.log("Time: ", Date.now());
//     next()
//  })

//  usersRouter.get("/",(req,res,next)=>{
//     console.log("Time: ", Date.now());
//     next()
//  })



 usersRouter.get('/',async(req,res)=>{
    
    let limit = req.query.limit 
    let  users = await userManager.getusers()
    if(!limit||limit < 0||limit >users.lenght) return res.status(200).send({users}) 
    let limitedusers = users.slice(0,limit)
    res.status(200).send({limitedusers})
 })

usersRouter.get('/:pid',async (req,res) =>{
    
    let id = req.params.pid
    try{
        const user = await userManager.getuserById(id)
        return res.status(200).send({user})
    }catch(e){
        console.log(e)
        return res.status(404).send({error:'user not found'})
    }
    

})

usersRouter.get('/:category', async (req,res)=>{
        let category = req.params.category
        const users = await userManager.getusers()
        let filtered = users.filter( (p)=> p.category === category)
        (filtered)? res.status(202).send({filtered}): res.status(404).send({error:"category not found"})
})

usersRouter.post("/", uploader.single("file"), async (req,res)=> {
    if(!req.file){
        return res.status(404).json({
            status:"error",
            msg:"file required to create user",
            data:{},
        })
    }
    try{
       const {title,description,abv,price,category,thumbnails,db} = req.body
        const  userAdded = userManager.getusers()[userManager.users.lenght-1]
        return res
        .status(200)
        .json({
            status:"success",
            msg: "user added",
            data: {userAdded}
        })
    }catch(e){

    }
    
    
    
    
})

usersRouter.put("/:id", async (req,res)=> {
    const id = req.params.id
    const newuser = {id:id,...req.body}
    try{
        await userManager.updateuser(id, newuser)
        return res
        .status(200)
        .json({status:"success",msg:"user is updated", data: newuser})

    }catch(e){
        console.log(e)
        return res
        .status(404)
        .json({status:"failure",msg:"user data is incorrect", data: newuser})
    }
})

usersRouter.delete("/:id", async (req,res)=>{
    const id = parseInt(req.params.id)
   
    try{

        const user = await userManager.deleteuserById(id)
        return res
        .status(200)
        .json({status:"success",msg:"user was deleted", data: user })

    }catch(e){
        console.log(e)
        return res
        .status(404)
        .json({status:"failure",msg:"user not found", id: id})
    }
})

export default usersRouter
