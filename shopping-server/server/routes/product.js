const {
  getList, save, update, getDetailById, destroy,
} = require('../controllers/product');

module.exports = (router) => {
  router.get('/product', getList);
  router.post('/product/save', save);
  router.patch('/product/:publicId/update', update);
  router.delete('/product/:publicId/destroy', destroy);
  router.patch('/product/:publicId', getDetailById);
};
