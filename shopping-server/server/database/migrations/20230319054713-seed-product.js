const product = require('../seed/product');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('product', product, {}),
  down: (queryInterface) => queryInterface.truncate('product', {}),
};
