import { User } from "../../models/user.js";
import { NotFoundError } from "../../shared/errors/classes.js";




const getAdmins = async () => {
    const data = await User.findAll({
        where: {
            role: "admin"
        }
    });
    if(!data){
        throw new NotFoundError("Admins not found")
    }

    return data;

}

const getUsers = async () => {
    const data = await User.findAll({
        where: {
            role: "user"
        }
    });

    if(!data){
        throw new NotFoundError("Users not found")
    }

    return data;
}




const deleteAdminById = async (id) => {

    const data = User.findByPk(id);

    if(!data){
        throw new NotFoundError("Not found this uuid admin")
    }

    await User.destroy({ where: { id} });
}


export {getAdmins, getUsers, deleteAdminById}