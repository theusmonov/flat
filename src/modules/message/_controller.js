import { createMessage, deleteAllMessages, deleteMessageById, getAllMessages } from "./flatCategoryMessage.js";



const CreateMsg = async (req, res, next) => {
    try {
        const data = await createMessage(req.body);
        return res.status(201).json({message: "Message added for user", data})
    } catch (err) {
        next(err)
    }
}

const DeleteAllMsg = async (req, res, next) => {
    try {
        const data = await deleteAllMessages();
        return res.status(200).json({message: "All messages deleted", data})
    } catch (err) {
        next(err)
    }
}


const DeleteMsgById = async (req, res, next) => {
    
    try {
        const data = await deleteMessageById(req.params.id);
        return res.status(200).json({message: "Message delete by id", data})
    } catch (err) {
        next(err)
    }
}


const GetAllMsg = async (req, res, next) => {
    
    try {
        const data = await getAllMessages();
        return res.status(200).json({message: "All messages", data})
    } catch (err) {
        next(err)
    }
}


export {CreateMsg, DeleteAllMsg, DeleteMsgById, GetAllMsg}