import { DataTypes, Model } from "sequelize";
import dbConnect from "../db/index.js";

export class FlatCategory extends Model {}

FlatCategory.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    categoryImage: {
        type : DataTypes.STRING,
        allowNull: false
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    metro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kvartiralar_soni: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qavatlar_soni: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    uyning_balandligi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bulib_tolash: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    uy_tipi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parkovka: {
      type: DataTypes.STRING,
      allowNull: false
    },
    klass: {
      type: DataTypes.STRING,
      allowNull: false
    },
    balkon: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isitish_tizimi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    territoriya: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefon: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    sequelize: dbConnect,
    tableName: "flatcategory",
    timestamps: true,
    paranoid: true,
    deletedAt: true,
  }
);


