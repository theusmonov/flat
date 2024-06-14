import { DataTypes, Model } from "sequelize";
import dbConnect from "../db/index.js";
import { FlatItem } from "./flatItem.js";



export class FlatItemChild extends Model{};


FlatItemChild.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    img: {
        type: DataTypes.TEXT,
        allowNull : false
    },
    narxi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING,
        allowNull : false
    },
    qavat: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    flatItem_id: {
        type: DataTypes.UUID,
        references: {
          model: FlatItem,
          key: 'id',
        },
    }
}, {
    sequelize: dbConnect,
    timestamps: true,
    tableName: "flatItemChild",
    paranoid: true,
    deletedAt: true
})