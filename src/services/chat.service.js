import { MessageModal } from "../DAO/models/messages.model.js";
class ChatService {
  async getAll() {
    const messages = await MessageModal.find(
      {},
      {
        _id: true,
        user:true,
       message: true,
       
      }
    );
    return messages;
  }
  async create({ user, message }) {
    const messageCreated = await MessageModal.create({
      user, 
      message,
    });
    return messageCreated;
  }

  async updateOne({ _id, user, message }) {
    const messageUptaded = await MessageModal.updateOne(
      {
        _id: _id,
      },
      {
        user,
       message,
      }
    );
    return messageUptaded;
  }

  async deleteOne(_id) {
    const result = await MessageModal.deleteOne({ _id: _id });
    return result;
  }
}
export const chatService = new ChatService();