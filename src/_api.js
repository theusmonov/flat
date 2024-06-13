import { Router } from "express"
import adminAuthRouter from "./modules/auth/_api.js";
import flatRouter from "./modules/flatCategory/_api.js";

const mainRouter = Router();


mainRouter.use(adminAuthRouter);
mainRouter.use(flatRouter);

export default mainRouter;