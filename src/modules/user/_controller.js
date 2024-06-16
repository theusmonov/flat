import { deleteAdminById, getAdmins, getUsers } from "./userService.js";




const GetAdmins = async (req, res, next) => {
    try {
        const data = await getAdmins();
        return res.status(200).json({message: "All admins", data})
    } catch (err) {
        next(err)
    }
}

const GetUsers = async (req, res, next) => {
    try {
        const data = await getUsers();
        return res.status(200).json({message: "All users", data})
    } catch (err) {
        next(err)
    }
}



const DeleteAdmin = async (req, res, next) => {
    try {
        const data = deleteAdminById(req.params.id);
        return res.status(200).json({message: "Admin user deleted successfully"})
    } catch (err) {
        next(err)
    }
}


export {GetAdmins, GetUsers, DeleteAdmin}