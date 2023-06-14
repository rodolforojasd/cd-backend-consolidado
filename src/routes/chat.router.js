import express from "express";

export const chatRouter = express.Router()


chatRouter.get("/", (req, res)=> {
    const title = "Chat de usuarios"
    const timeStamp = Date.now()
    return res.status(200).render('chat', {
        title,
        timeStamp
    })
})

