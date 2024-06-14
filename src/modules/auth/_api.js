import { Router } from "express";
import { PostLoginAdmin, PostLoginUser, PostRegisterAdmin, PostRegisterUser } from "./_controller.js";
import validateMiddleware from "../../shared/middleware/validate.js";
import { loginAdminSchema, registerAdminSchema } from "./_schema.js";



const adminAuthRouter = Router();

adminAuthRouter.post("/admin/signup", validateMiddleware(registerAdminSchema), PostRegisterAdmin);
adminAuthRouter.post("/admin/signin", validateMiddleware(loginAdminSchema), PostLoginAdmin);
adminAuthRouter.post("/user/signup", validateMiddleware(registerAdminSchema), PostRegisterUser);
adminAuthRouter.post("/user/signin", validateMiddleware(loginAdminSchema), PostLoginUser);

export default adminAuthRouter;
