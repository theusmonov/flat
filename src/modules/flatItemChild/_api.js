import { Router } from "express";
import { upload } from "../../utils/multer.js";
import { DeleteFlatChildAll, DeleteFlatChildById, FlatChildCreate, GetAllFlatChild, GetFlatChildById, UpdatedFlatChildById } from "./_controller.js";


const flatChildRouter = Router();
flatChildRouter.post("/admin/createFlatChild", upload.single("img"), FlatChildCreate);
flatChildRouter.get("/admin/getAllFlatChild", GetAllFlatChild);
flatChildRouter.get("/admin/getFlatChildBy/:id", GetFlatChildById);
flatChildRouter.delete("/admin/deleteAllFlatChild", DeleteFlatChildAll);
flatChildRouter.delete("/admin/deleteFlatChildBy/:id", DeleteFlatChildById);
flatChildRouter.put("/admin/updateFlatChildById/:id", upload.single("img"), UpdatedFlatChildById);


export default flatChildRouter;