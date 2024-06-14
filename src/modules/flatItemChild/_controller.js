import { deleteAllFlatItemChildren, deleteFlatItemChildById, flatChildCreate, getAllFlatItemChildren, getFlatItemChildById, updateFlatItemChildById } from "./flatItemChildService.js"




const FlatChildCreate = async (req, res, next) => {
    try {
        const data = await flatChildCreate(req.body, req);
        return res.status(201).json({message: "Flat item child created", data})
    } catch (err) {
        next(err)
    }
};

const GetAllFlatChild = async (req, res, next) => {
    try {
        const data = await getAllFlatItemChildren();
        return res.status(200).json({message: "All flat childs", data})
    } catch (err) {
        next(err)
    }
};


const GetFlatChildById = async (req, res, next) => {
    try {
        const data = await getFlatItemChildById(req.params.id);
        return res.status(200).json({message: "Flat child by id", data})
    } catch (err) {
        next(err)
    }
};


const DeleteFlatChildAll = async (req, res, next) => {
    try {
        const data = await deleteAllFlatItemChildren();
        return res.status(200).json({message: "Deleted all flat childs", data})
    } catch (err) {
        next(err)
    }
};


const DeleteFlatChildById = async (req, res, next) => {
    try {
        const data = await deleteFlatItemChildById(req.params.id);
        return res.status(200).json({message: "Deleted by id flat child", data})
    } catch (err) {
        next(err)
    }
}


const UpdatedFlatChildById = async (req, res, next) => {
    try {
        const data = await updateFlatItemChildById(req.params.id, req.body, req);
        return res.status(200).json({message: "Flat child updated by id", data})
    } catch (err) {
        next(err)
    }
}


export {FlatChildCreate, GetAllFlatChild, GetFlatChildById, DeleteFlatChildAll, DeleteFlatChildById, UpdatedFlatChildById}