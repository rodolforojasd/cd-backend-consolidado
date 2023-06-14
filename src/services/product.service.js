import { ProductModel } from "../DAO/models/products.models.js";


class ProductService {
  async getAll() {
    const products = await ProductModel.find(
      {},
      {
        _id:true,
        title:true,
        description:true,
        abv:true,
        price:true,
        status:true,
        stock:true,
        category:true,
        thumbnail:true,
      }
    );
    return products;
  }

  async create({  title, description, abv, price, status, stock, category, thumbnail }) {
    const productCreated = await ProductModel.create({
         title, description, abv, price, status, stock, category, thumbnail
    });
    return productCreated;
  }

  async updateOne({ _id,  title, description, abv, price, status, stock, category, thumbnail }) {
    const productUptaded = await ProductModel.updateOne(
      {
        _id: _id,
      },
      {
         title, description, abv, price, status, stock, category, thumbnail,
      }
    );
    return productUptaded;
  }

  async deleteOne(_id) {
    const result = await ProductModel.deleteOne({ _id: _id });
    return result;
  }
}
export const productService = new ProductService();