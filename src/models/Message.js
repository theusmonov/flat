import { DataTypes, Model } from "sequelize";
import { FlatCategory } from "./flatCategory.js";
import dbConnect from "../db/index.js";
import { User } from "./user.js";




export class Message extends Model{};

Message.init({
    id: {
        type: DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
        primaryKey: true
    },
    ism: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefon: {
        type: DataTypes.STRING,
        allowNull: false
    },
    flatCategory_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: FlatCategory,
            key: 'id'
        },
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        },
    },

}, {
    sequelize: dbConnect,
    timestamps : true,
    tableName : "message",
    paranoid: true,
    deletedAt: true
})


