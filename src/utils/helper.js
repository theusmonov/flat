import bcrypt from "bcrypt";
import config from "../shared/config/index.js";
import jwt from "jsonwebtoken"
const bcryptHash = {
  hash: (password) => {
    return bcrypt.hashSync(password, 12);
  },
  compare: (password, passwordHash) => {
    return bcrypt.compareSync(password, passwordHash);
  },
};

const jwtSignToken = {
  sign: (payload) => {
    return jwt.sign(payload, config.jwt.secret_key, {
      expiresIn: "12h",
    });
  },
};

const jwtVerifyToken =  {
    verify: (token, secretKey) => {
    return jwt.verify(token, secretKey);
   }

};


const jwtRefreshToken = (payload) => {
  return jwtSignToken.sign(payload, config.jwt.refresh_key, {
    expiresIn: "30d",
  });
};

export { bcryptHash, jwtSignToken, jwtRefreshToken, jwtVerifyToken};
