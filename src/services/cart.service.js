import { CartModel } from "../DAO/models/carts.model.js";


class CartService {
  async getAll() {
    const carts = await CartModel.find(
      {},
      {
        _id: true,
        products: true,
      }
    );
    return carts;
  }
  async create({ products }) {
    const cartCreated = await CartModel.create({
     products,
    });
    return cartCreated;
  }
  async updateOne({ _id, firstName, lastName, email }) {
    const cartUptaded = await CartModel.updateOne(
      {
        _id: _id,
      },
      {
       products,
      }
    );
    return cartUptaded;
  }

  async deleteOne(_id) {
    const result = await CartModel.deleteOne({ _id: _id });
    return result;
  }
}
export const cartService = new CartService();