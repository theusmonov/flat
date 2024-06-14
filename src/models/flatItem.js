import { DataTypes, Model } from "sequelize";
import dbConnect from "../db/index.js";
import { FlatCategory } from "./flatCategory.js";




export class FlatItem extends Model{};

FlatItem.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    xonasi: {
       type: DataTypes.STRING,
       allowNull : false
    },
    narx: {
        type: DataTypes.STRING,
        allowNull: false
    },
    flatCategory_id: {
        type: DataTypes.UUID,
        references: {
          model: FlatCategory,
          key: 'id',
        },
    }
}, {
    sequelize: dbConnect,
    tableName: "flatItem",
    timestamps : true,
    paranoid: true,
    deletedAt: true
})