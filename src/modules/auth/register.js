
import { User } from "../../models/user.js";
import { BadRequestError } from "../../shared/errors/classes.js";
import { bcryptHash, jwtRefreshToken, jwtSignToken } from "../../utils/helper.js";




const registerServices = async (data, isAdmin = false) => {
    const {fullName, email, password, phoneNumber} = data;
    const checkEmail = await User.findOne({
        where: {email},
    })
    if (checkEmail) {
        throw new BadRequestError('Email already exists');
    }
    const role = isAdmin ? "admin" : "user";
    const hashPassword = bcryptHash.hash(password)
    const access_token = jwtSignToken.sign({email, password, role});
    const refresh_token = jwtRefreshToken({email, password, role});
    const newUser = await User.create({...data, password: hashPassword, role})
    return {access_token, refresh_token, user_id: newUser.id};
}

export default registerServices;