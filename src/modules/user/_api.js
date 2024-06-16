import { Router } from "express";
import { DeleteAdmin, GetAdmins, GetUsers } from "./_controller.js";



const userRouter = Router();

userRouter.get("/getAdmins", GetAdmins);
userRouter.get("/getUsers", GetUsers);
userRouter.delete("/adminDelete/:id", DeleteAdmin)

export default userRouter;