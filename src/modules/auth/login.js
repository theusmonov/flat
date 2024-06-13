import { User } from "../../models/user.js";
import { UnauthorizedError } from "../../shared/errors/classes.js";
import { bcryptHash, jwtRefreshToken, jwtSignToken } from "../../utils/helper.js";



const loginServices = async (data) => {
    const {email, password} = data;

    const user = await User.findOne({
        where: {email},
    });

    if (!user) {
        throw new UnauthorizedError("Invalid email or password");
    }

    const passwordCheck = bcryptHash.compare(password, user.password);

    if (!passwordCheck) {
        throw new UnauthorizedError("Invalid email or password");
    }

    const access_token = jwtSignToken.sign({email, password});
    const refresh_token = jwtRefreshToken({email, password});

    return {access_token, refresh_token, user_id: user.id};

}

export default loginServices;