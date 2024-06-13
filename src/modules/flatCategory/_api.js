import { Router } from "express";
import { upload } from "../../utils/multer.js";
import { FlatCreate, FlatDeleteAllCategory, FlatDeleteById, FlatGetAll, FlatGetById, FlatUpdateById } from "./_contoller.js";

const flatRouter = Router();

flatRouter.post("/admin/createCategory", upload.single("categoryImage"), FlatCreate);
flatRouter.get("/admin/getAllCategory", FlatGetAll);
flatRouter.get("/admin/getCategoryBy/:id", FlatGetById);
flatRouter.delete("/admin/deleteCategoryAll", FlatDeleteAllCategory);
flatRouter.delete("/admin/deleteCategoryBy/:id", FlatDeleteById);
flatRouter.put("/admin/updateCategoryBy/:id", upload.single("categoryImage"), FlatUpdateById);

export default flatRouter;