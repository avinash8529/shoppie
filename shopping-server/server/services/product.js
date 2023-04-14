const { v1: uuidv1 } = require('uuid');
const {
  product: ProductModel,
} = require('../database');
const Helper = require('../utils/helper');

const getList = async () => {
  const response = await ProductModel.findAndCountAll({

    attributes: [ 'public_id', 'title', 'price', 'image', 'description', 'rating', 'created_at' ],

    order: [ [ 'title', 'asc' ] ],
  });

  if (response) {
    const { count, rows } = response;
    const doc = rows.map((element) => Helper.convertSnakeToCamel(element.dataValues));

    return { count, doc };
  }

  return { count: 0, doc: [] };
};

const save = async (payload) => {
  const data = {
    public_id: uuidv1(),
    created_by: uuidv1(),
    updated_by: uuidv1(),
    ...payload,
  };

  const response = await ProductModel.create(data);

  if (response) {
    return { doc: { message: 'saved successfully' } };
  }

  return { doc: { message: "product did'nt saved" } };
};

const update = async (payload) => {
  const { productId, ...data } = payload;

  const response = await ProductModel.update(
    data,
    { where: { public_id: productId } },
  );

  if (response) {
    return { doc: { message: 'update successfully' } };
  }

  return { doc: { message: "product did'nt updated" } };
};
const destroy = async (payload) => {
  const { productId } = payload;

  const response = await ProductModel.destroy(
    { where: { public_id: productId } },
  );

  if (response) {
    return { doc: { message: 'update successfully' } };
  }

  return { doc: { message: "product did'nt updated" } };
};

const getDetailById = async (payload) => {
  const { publicId } = payload;
  // const { limit, offset } = data;

  // let where = { status: 'active' };

  // if (name) {
  //   where = { [Op.or]: [ { public_id: '74d441f4-ae6c-11eb-8529-0242ac130003' }, { name: { [Op.iLike]: `%${name}%` } } ] };
  // }

  const response = await ProductModel.findOne({
    attributes: [ 'public_id', 'title', 'price', 'image', 'description', 'rating', 'created_at' ],
    where: { public_id: publicId },
  });

  if (response) {
    const { dataValues } = response;
    const doc = Helper.convertSnakeToCamel(dataValues);

    return { doc };
  }

  return { doc: {} };
};

module.exports = {
  getList,
  save,
  update,
  destroy,
  getDetailById,
};
