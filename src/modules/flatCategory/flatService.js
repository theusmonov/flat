import { FlatCategory } from "../../models/flatCategory.js";
import { BadRequestError, NotFoundError } from "../../shared/errors/classes.js";
import { url } from "../../utils/baseUrl.js";

const flatCreate = async (data, req) => {
  const { filename } = req.file;
  const {
    categoryName,
    location,
    metro,
    time,
    kvartiralar_soni,
    qavatlar_soni,
    uyning_balandligi,
    bulib_tolash,
    uy_tipi,
    parkovka,
    klass,
    balkon,
    isitish_tizimi,
    territoriya,
    telefon,
  } = data;

  const existCategory = await FlatCategory.findOne({
    where: {
      categoryName,
    },
  });

  if (existCategory) {
    throw new BadRequestError("This category already exists");
  }

  const createCategory = await FlatCategory.create({
    ...data,
    categoryImage: `${filename}`,
  });

  return createCategory;
};



const flatCategoryGetAll = async () => {
  const getData = await FlatCategory.findAll();

  if (getData.length === 0) {
    throw new NotFoundError("Flat all categories not found");
  }

  const data = getData.map((category) => ({
    id: category.id,
    categoryName: category.categoryName,
    categoryImage: `${url}/${category.categoryImage}`,
    location: category.location,
    metro: category.metro,
    time: category.time,
    kvartiralar_soni: category.kvartiralar_soni,
    qavatlar_soni: category.qavatlar_soni,
    uyning_balandligi: category.uyning_balandligi,
    bulib_tolash: category.bulib_tolash,
    uy_tipi: category.uy_tipi,
    parkovka: category.parkovka,
    klass: category.klass,
    balkon: category.balkon,
    isitish_tizimi: category.isitish_tizimi,
    territoriya: category.territoriya,
    telefon: category.telefon,
  }));

  return data;
};



const getFlatCategoryById = async (id) => {

  const findCategory = await FlatCategory.findByPk(id);

  if (!findCategory) {
    throw new NotFoundError(`This id ${id} flat category not found`);
  }

  findCategory.categoryImage = `${url}/${findCategory.categoryImage}`;

return findCategory;
};



const deleteCategoryAll = async () => {

    const data = await FlatCategory.findAll();

    if(!data) {
        throw new NotFoundError("There are not categories to delete")
    }

    await FlatCategory.destroy({where: {}, force: true});

    return {message: "All categories have been deleted", deletedCount: data.length};
}


const deleteCategoryById = async (id) => {

    const data = await FlatCategory.findByPk(id);

    if(!data) {
        throw new NotFoundError(`This id ${id} flat category not found`)
    }

    await data.destroy();

    return {message: `Category with id ${id} deleted successfully`};
}



const updateFlatCategoryById = async (id, data, req) => {
    const { filename } = req.file;
    const cleanId = id.trim();
    const updateData = await FlatCategory.findByPk(cleanId);

    if(!updateData){
        throw new NotFoundError(`Category with Id ${id} not found`);
    }
    const newUpdateData = {
        categoryName: data.categoryName ? data.categoryName : updateData.categoryName,
        categoryImage: filename ? `${filename}` : updateData.categoryImage,
        location: data.location ? data.location : updateData.location,
        metro: data.metro ? data.metro : updateData.metro,
        time: data.time ? data.time : updateData.time,
        kvartiralar_soni: data.kvartiralar_soni ? data.kvartiralar_soni : updateData.kvartiralar_soni,
        qavatlar_soni: data.qavatlar_soni ? data.qavatlar_soni : updateData.qavatlar_soni,
        uyning_balandligi: data.uyning_balandligi ? data.uyning_balandligi : updateData.uyning_balandligi,
        bulib_tolash: data.bulib_tolash ? data.bulib_tolash : updateData.bulib_tolash,
        uy_tipi: data.uy_tipi ? data.uy_tipi : updateData.uy_tipi,
        parkovka: data.parkovka ? data.parkovka : updateData.parkovka,
        klass: data.klass ? data.klass : updateData.klass,
        balkon: data.balkon ? data.balkon : updateData.balkon,
        isitish_tizimi: data.isitish_tizimi ? data.isitish_tizimi : updateData.isitish_tizimi,
        territoriya: data.territoriya ? data.territoriya : updateData.territoriya,
        telefon: data.telefon ? data.telefon : updateData.telefon,
    };

    await updateData.update(newUpdateData);
    return updateData;
}

export { flatCreate, flatCategoryGetAll, getFlatCategoryById, deleteCategoryAll, deleteCategoryById, updateFlatCategoryById};
