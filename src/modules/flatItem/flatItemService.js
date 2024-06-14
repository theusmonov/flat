import { FlatCategory } from "../../models/flatCategory.js";
import { FlatItem } from "../../models/flatItem.js";
import { FlatItemChild } from "../../models/flatItemChild.js";
import { BadRequestError, NotFoundError } from "../../shared/errors/classes.js";
import pkg from "validator";
import { url } from "../../utils/baseUrl.js";
const { isUUID } = pkg;


const flatItemCreate = async (data) => {
  const { xonasi, narx, flatCategory_id } = data;

  if (!xonasi || !narx || !flatCategory_id) {
    throw new BadRequestError("The field should not be empty.");
  }

  if (!isUUID(flatCategory_id)) {
    throw new BadRequestError("Invalid flatCategory id format");
  }

  const findIdCategory = await FlatCategory.findByPk(flatCategory_id);

  if (!findIdCategory) {
    throw new BadRequestError("Invalid flatCategory id provided");
  }

  const item = await FlatItem.create({
    xonasi,
    narx,
    flatCategory_id,
  });

  return item;
};



const deleteAllFlatItems = async () => {
  const item = await FlatItem.findAll();

  if (!item.length) {
    throw new NotFoundError("Deleted flat item not found");
  }
  const deletedCount = await FlatItem.destroy({
    where: {},
    truncate: true,
  });
  return { message: "All flat items have been deleted", deletedCount };
};

const deleteFlatItemById = async (id) => {
  const trimmedId = id.trim();
  const item = await FlatItem.findByPk(trimmedId);

  if (!item) {
    throw new NotFoundError(`Flat item with ID ${id} not found`);
  }

  await item.destroy();

  return { message: `Flat item with ID ${id} has been deleted` };
};



const getAllFlatItems = async () => {
  const items = await FlatItem.findAll({
    include: [
      {
        model: FlatItemChild,
        as: 'children', 
        required: false 
      }
    ]
  });

  if (items.length === 0) {
    throw new NotFoundError("No flat items found");
  }

  return items.map((item) => ({
    id: item.id,
    xonasi: item.xonasi,
    narx: item.narx,
    planirovka: item.children.length,
    flatCategory_id: item.flatCategory_id,
  }));
};



const getFlatItemById = async (id) => {
  const trimmedId = id.trim();

  const item = await FlatItem.findByPk(trimmedId, {
    include: [
      {
        model: FlatItemChild,
        as: 'children', 
        required: false
      }
    ]
  });

  if (!item) {
    throw new NotFoundError(`Flat item with ID ${trimmedId} not found`);
  }
  const mappedItem = {
    id: item.id,
    xonasi: item.xonasi,
    narx: item.narx,
    flatCategory_id: item.flatCategory_id,
    children: item.children.map(child => ({
      id: child.id,
      img: `${url}/${child.img}`,
      narxi: child.narxi,
      size: child.size,
      qavat: child.qavat
    }))
  };

  return mappedItem;
};



const updateFlatItemById = async (id, data) => {
  const trimmedId = id.trim();

  const itemToUpdate = await FlatItem.findByPk(trimmedId);

  if (!itemToUpdate) {
    throw new NotFoundError(`Flat item with ID ${trimmedId} not found`);
  }

  const updatedData = {
    xonasi: data.xonasi ? data.xonasi : itemToUpdate.xonasi,
    narx: data.narx ? data.narx : itemToUpdate.narx,
    flatCategory_id: data.flatCategory_id
      ? data.flatCategory_id
      : itemToUpdate.flatCategory_id,
  };

  await itemToUpdate.update(updatedData);
  return itemToUpdate;
};


export {
  flatItemCreate,
  deleteAllFlatItems,
  deleteFlatItemById,
  getAllFlatItems,
  getFlatItemById,
  updateFlatItemById,
};
