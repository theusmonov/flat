import { deleteCategoryAll, deleteCategoryById, flatCategoryGetAll, flatCreate, getFlatCategoryById, updateFlatCategoryById } from "./flatService.js"




const FlatCreate = async (req, res, next) => {
    try {
        const data = await flatCreate(req.body, req);
        return res.status(201).json({message: "Flat category created"})
    } catch (err) {
        next(err)
    }
}


const FlatGetAll = async (req, res, next) => {
    try {
        const data = await flatCategoryGetAll();
        return res.status(200).json({message: "Flat all categories", data: data})
    } catch (err) {
        next(err)
    }
}


const FlatGetById = async (req, res, next) => {
    try {
        const data = await getFlatCategoryById(req.params.id);
        return res.status(200).json({message: "Flat category by id", data: data})
    } catch (err) {
        next(err)
    }
}


const FlatDeleteAllCategory = async (req, res, next) => {
    try {
        const data = await deleteCategoryAll();
        return res.status(200).json({message: "Flat categories deleted all", data: data})
    } catch (err) {
        next(err)
    }
}


const FlatDeleteById = async (req, res, next) => {
    try {
        const data = await deleteCategoryById(req.params.id);
        return res.status(200).json({message: "Flat category by id deleted", data: data})
    } catch (err) {
        next(err)
    }
}



const FlatUpdateById = async (req, res, next) => {
    try {
        const data = await updateFlatCategoryById(req.params.id, req.body, req);
        return res.status(200).json({message: "Flat category updated", data: data})
    } catch (err) {
        next(err)
    }
}







export {FlatCreate, FlatGetAll, FlatGetById, FlatDeleteAllCategory, FlatDeleteById, FlatUpdateById}