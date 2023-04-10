const { Category } = require('../models');

const httpErrGen = (status, message) => ({ status, message });

const create = async (name) => {
  if (!name) throw httpErrGen(400, '"name" is required');
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { create, getAll };
