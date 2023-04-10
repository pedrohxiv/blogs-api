const { Category } = require('../models');

const httpErrGen = (status, message) => ({ status, message });

const create = async (name) => {
  if (!name) throw httpErrGen(400, '"name" is required');
  const newCategory = await Category.create({ name });
  return newCategory;
};

module.exports = { create };
