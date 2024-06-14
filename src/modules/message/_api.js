import { Router } from "express";
import { CreateMsg, DeleteAllMsg, DeleteMsgById, GetAllMsg } from "./_controller.js";




const messageRouter = Router();

messageRouter.post("/user/addMessage", CreateMsg);
messageRouter.delete("/admin/deleteAllMessage", DeleteAllMsg);
messageRouter.delete("/admin/deleteMessageBy/:id", DeleteMsgById);
messageRouter.get("/admin/getAllMessage", GetAllMsg);
export default messageRouter;