import { Message } from "../../models/Message.js";
import { FlatCategory } from "../../models/flatCategory.js";
import { User } from "../../models/user.js";
import { BadRequestError, NotFoundError } from "../../shared/errors/classes.js";
import pkg from "validator";
const { isUUID } = pkg;

const createMessage = async (data) => {
  const { ism, telefon, flatCategory_id, user_id } = data;

  if (!ism || !telefon || !flatCategory_id || !user_id) {
    throw new BadRequestError("Missing required fields");
  }

  if (!isUUID(flatCategory_id) || !isUUID(user_id)) {
    throw new BadRequestError("Invalid product id or user id format");
  }

  const findProduct = await FlatCategory.findByPk(flatCategory_id);

  if (!findProduct) {
    throw new BadRequestError("Invalid product id provided");
  }

  const findUser = await User.findByPk(user_id);
  if (!findUser) {
    throw new BadRequestError(
      "User not found. Please register to leave a message."
    );
  }

  const order = await Message.create({
    ism,
    telefon,
    flatCategory_id,
    user_id,
  });

  return order;
};



const deleteAllMessages = async () => {
    
    const data = await Message.findAll();
    if(!data) {
        throw new NotFoundError("All messages not found")
    }

    await Message.destroy({ where: {}, truncate: true });
    return { message: "All messages have been deleted" };
  };


const deleteMessageById = async (id) => {
    const result = await Message.destroy({ where: { id } });

    if (!result) {
      throw new NotFoundError(`Message with ID ${id} not found`);
    }
    return { message: `Message with ID ${id} has been deleted` };
};



const getAllMessages = async () => {
    const messages = await Message.findAll({
      include: [
        {
          model: FlatCategory,
          as: 'flatCategory',
          attributes: ['categoryName'],
        },
        {
          model: User,
          as: 'user',
        },
      ],
    });
  
    if (messages.length === 0) {
      throw new NotFoundError("No messages found");
    }
  
    return messages;
  };
  


export {createMessage, deleteAllMessages, deleteMessageById, getAllMessages};
