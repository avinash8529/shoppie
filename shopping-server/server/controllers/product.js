const { Shopping: ProductService } = require('../services');

const getList = async (req, res) => {
  const { doc } = await ProductService.getList();

  if (doc.length) {
    return res.getRequest(doc);
  }

  return res.getRequest([]);
};

const save = async (req, res) => {
  try {
    const { doc } = await ProductService.save(req.body);

    if (doc) {
      return res.postRequest();
    }

    return res.postRequest();
  } catch (err) {
    return res.serverError();
  }
};

const update = async (req, res) => {
  try {
    const productId = req.params.publicId;
    const data = { productId, ...req.body };
    const { doc } = await ProductService.update(data);

    if (doc) {
      return res.updated();
    }

    return res.updated();
  } catch (err) {
    return res.serverError();
  }
};

const destroy = async (req, res) => {
  try {
    const productId = req.params.publicId;
    const data = { productId };
    const { doc } = await ProductService.destroy(data);

    if (doc) {
      return res.deleted();
    }

    return res.deleted();
  } catch (err) {
    return res.deleted();
  }
};

const getDetailById = async (req, res) => {
  try {
    const { publicId } = req.params;
    const data = { publicId };
    const { doc } = await ProductService.getDetailById(data);

    if (doc) {
      return res.getRequest(doc);
    }

    return res.getRequest([]);
  } catch (err) {
    return res.getRequest();
  }
};

module.exports = {
  getList, save, update, destroy, getDetailById,
};
