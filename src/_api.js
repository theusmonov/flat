import { Router } from "express"
import adminAuthRouter from "./modules/auth/_api.js";
import flatRouter from "./modules/flatCategory/_api.js";
import flatItemRouter from "./modules/flatItem/_api.js";
import flatChildRouter from "./modules/flatItemChild/_api.js";
import messageRouter from "./modules/message/_api.js";

const mainRouter = Router();


mainRouter.use(adminAuthRouter);
mainRouter.use(flatRouter);
mainRouter.use(flatItemRouter);
mainRouter.use(flatChildRouter);
mainRouter.use(messageRouter);

export default mainRouter;