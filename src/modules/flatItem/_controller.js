import { deleteAllFlatItems, deleteFlatItemById, flatItemCreate, getAllFlatItems, getFlatItemById, updateFlatItemById } from "./flatItemService.js"




const FlatItemCreate = async (req, res, next) => {
    try {
        const data = await flatItemCreate(req.body);
        return res.status(201).json({message: "Flat item created", data})
    } catch (err) {
        next(err)
    }
}

const DeleteFlatItemAll = async (req, res, next) => {
    try {
        const data = await deleteAllFlatItems();
        return res.status(200).json({message: "All flat items deleted", data})
    } catch (err) {
        next(err)
    }
}


const DeleteFlatItemById = async (req, res, next) => {
    try {
        const data = await deleteFlatItemById(req.params.id);
        return res.status(200).json({message: "Flat item deleted by id", data})
    } catch (err) {
        next(err)
    }
}


const GetAllFlatItems = async (req, res, next) => {
    try {
        const data = await getAllFlatItems();
        return res.status(200).json({message: "All flat items", data})
    } catch (err) {
        next(err)
    }
}


const GetFlatItemById = async (req, res, next) => {
    try {
        const data = await getFlatItemById(req.params.id);
        return res.status(200).json({message: "Flat get by id", data})
    } catch (err) {
        next(err)
    }
}


const UpdatedFlatItemById = async (req, res, next) => {
    try {
        const data = await updateFlatItemById(req.params.id, req.body);
        return res.status(200).json({message: "Flat item updated", data})
    } catch (err) {
        next(err)
    }
}

export {FlatItemCreate, DeleteFlatItemAll, DeleteFlatItemById, GetAllFlatItems, GetFlatItemById, UpdatedFlatItemById}