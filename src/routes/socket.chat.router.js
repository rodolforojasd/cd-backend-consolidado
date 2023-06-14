import express from "express";

export const socketChatRouter = express.Router();

socketChatRouter.get("/", (req, res) => {
  return res.render(200).render("chat", {});
});