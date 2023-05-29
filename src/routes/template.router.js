import express from "express";
import { productManager } from "../ProductManager/ProductManager.js";



export const templateProducts = express.Router();

templateProducts.get("/", async  (req, res) => {
  const products = productManager.getProducts()
  const title = "Bienvenido a Unión Licorera!";
  return res.status(200).render("template.products", {
    title,
    products,
  })
})