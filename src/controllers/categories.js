const categoriesService = require('../services/categories');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const newCategory = await categoriesService.create(name);

    return res.status(201).json(newCategory);
  } catch (error) {
    return next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const categories = await categoriesService.getAll();

    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getAll };
