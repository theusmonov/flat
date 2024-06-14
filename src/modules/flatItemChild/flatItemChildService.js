import { FlatItem } from "../../models/flatItem.js";
import { FlatItemChild } from "../../models/flatItemChild.js";
import { BadRequestError, NotFoundError } from "../../shared/errors/classes.js";
import { url } from "../../utils/baseUrl.js";

const flatChildCreate = async (data, req) => {
  const { filename } = req.file;

  const { narxi, size, qavat, flatItem_id } = data;

  if (!narxi || !size || !qavat || !flatItem_id) {
    throw new BadRequestError("Required fields are missing");
  }

  const findFlatItem = await FlatItem.findByPk(flatItem_id);

  if (!findFlatItem) {
    throw new BadRequestError(`FlatItem with id ${flatItem_id} not found`);
  }
  const flatItemChild = await FlatItemChild.create({
    img: filename,
    narxi,
    size,
    qavat,
    flatItem_id,
  });

  return flatItemChild;
};



const getAllFlatItemChildren = async () => {
  const children = await FlatItemChild.findAll();

  if (children.length === 0) {
    throw new NotFoundError("No flat item children found");
  }

  return children.map((child) => ({
    id: child.id,
    img: `${url}/${child.img}`,
    narxi: child.narxi,
    size: child.size,
    qavat: child.qavat,
    flatItem_id: child.flatItem_id,
  }));
};


const getFlatItemChildById = async (id) => {
  const child = await FlatItemChild.findByPk(id);

  if (!child) {
    throw new NotFoundError(`Flat item child with ID ${id} not found`);
  }

  return {
    id: child.id,
    img: `${url}/${child.img}`,
    narxi: child.narxi,
    size: child.size,
    qavat: child.qavat,
    flatItem_id: child.flatItem_id,
  };
};



const deleteAllFlatItemChildren = async () => {
  const deletedCount = await FlatItemChild.destroy({
    where: {},
    truncate: true,
  });

  if (deletedCount === 0) {
    throw new NotFoundError("No flat item children found to delete");
  }

  return { message: "All flat item children have been deleted", deletedCount };
};



const deleteFlatItemChildById = async (id) => {
  const trimmedId = id.trim();
  const child = await FlatItemChild.findByPk(trimmedId);

  if (!child) {
    throw new NotFoundError(`Flat item child with ID ${id} not found`);
  }

  await child.destroy();
  return { message: `Flat item child with ID ${id} has been deleted` };
};




const updateFlatItemChildById = async (id, data, req) => {
    const { filename } = req.file;
    const { narxi, size, qavat } = data;
  
    const child = await FlatItemChild.findByPk(id);
  
    if (!child) {
      throw new NotFoundError(`Flat item child with ID ${id} not found`);
    }
  
    const updatedData = {
      img: filename ? filename : child.img,
      narxi: narxi ? narxi : child.narxi,
      size: size ? size : child.size,
      qavat: qavat ? qavat : child.qavat
    };
  
    await child.update(updatedData);
  
    return { message: `Flat child with ID ${id} updated successfully` };
  };


export {
  flatChildCreate,
  getAllFlatItemChildren,
  getFlatItemChildById,
  deleteAllFlatItemChildren,
  deleteFlatItemChildById,
  updateFlatItemChildById
};
