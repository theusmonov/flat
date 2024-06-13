import { DataTypes, Model } from "sequelize";
import dbConnect from "../db/index.js";
import { User_role } from "../utils/role.js";



export class User extends Model{};

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: User_role.ADMIN,
        enum: [User_role.ADMIN]
    }
},{
    sequelize: dbConnect,
    tableName: "users",
    paranoid: true,
    timestamps : true,
    deletedAt: true
})

await dbConnect.sync({alter: true})