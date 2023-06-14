import { ProductModel } from "../DAO/models/products.models.js";


class ProductService {
  async getAll() {
    const products = await ProductModel.find(
      {},
      {
        _id:true,
        code:true,
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

  async create({ code, title, description, abv, price, status, stock, category, thumbnail }) {
    const productCreated = await ProductModel.create({
        code, title, description, abv, price, status, stock, category, thumbnail
    });
    return productCreated;
  }

  async updateOne({ _id, code, title, description, abv, price, status, stock, category, thumbnail }) {
    const productUptaded = await ProductModel.updateOne(
      {
        _id: _id,
      },
      {
        code, title, description, abv, price, status, stock, category, thumbnail,
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