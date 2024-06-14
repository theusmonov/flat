import { Router } from "express";
import { DeleteFlatItemAll, DeleteFlatItemById, FlatItemCreate, GetAllFlatItems, GetFlatItemById, UpdatedFlatItemById } from "./_controller.js";


const flatItemRouter = Router();
flatItemRouter.post("/admin/createFlatItem", FlatItemCreate);
flatItemRouter.delete("/admin/deleteFlatItemAll", DeleteFlatItemAll);
flatItemRouter.delete("/admin/deleteFlatItemBy/:id", DeleteFlatItemById);
flatItemRouter.get("/admin/getAllFlatItems", GetAllFlatItems);
flatItemRouter.get("/admin/getFlatItemBy/:id", GetFlatItemById);
flatItemRouter.put("/admin/updatedFlatItemBy/:id", UpdatedFlatItemById);


export default flatItemRouter;