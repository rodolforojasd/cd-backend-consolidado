import express from "express";
import { productManager } from "../ProductManager/ProductManager";

const products = productManager.getProducts()

export const templateProducts = express.Router();

templateProducts.get("/", (req, res) => {
  const title = "Bienvenido a Unión Licorera!";
  return res.status(200).render("template.products", {
    title,
    products,
  })
})