import dbConnect from "../db/index.js";
import { Message } from "../models/Message.js";
import { FlatCategory } from "../models/flatCategory.js";
import { FlatItem } from "../models/flatItem.js";
import { FlatItemChild } from "../models/flatItemChild.js";
import { User } from "../models/user.js";



export const relation = async () => {
    try {
      await dbConnect.sync({ alter: true });
     
      FlatCategory.hasMany(FlatItem, { foreignKey: 'flatCategory_id' });
      FlatItem.belongsTo(FlatCategory, { foreignKey: 'flatCategory_id' });

      FlatItem.hasMany(FlatItemChild, { foreignKey: 'flatItem_id', as: 'children' });
      FlatItemChild.belongsTo(FlatItem, { foreignKey: 'flatItem_id', as: 'flatItem' });

      Message.belongsTo(FlatCategory, { foreignKey: 'flatCategory_id', as: 'flatCategory', });
      Message.belongsTo(User, { foreignKey: "user_id", as: "user" });

      await dbConnect.sync({ alter: true });
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  };
  
  export const modelSync = async () => {
    try {
      await dbConnect.sync();
      console.log("Modellar bo'glanishi muvaffaqiyatli amalga oshdi!");
    } catch (e) {
      console.error("Modellar bog'lanishda muammo bor!", e.message);
    }
  };