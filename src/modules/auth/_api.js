import { Router } from "express";
import { PostLoginAdmin, PostRegisterAdmin } from "./_controller.js";
import validateMiddleware from "../../shared/middleware/validate.js";
import { loginAdminSchema, registerAdminSchema } from "./_schema.js";



const adminAuthRouter = Router();

adminAuthRouter.post("/admin/signup", validateMiddleware(registerAdminSchema), PostRegisterAdmin);
adminAuthRouter.post("/admin/signin", validateMiddleware(loginAdminSchema), PostLoginAdmin);

export default adminAuthRouter;
