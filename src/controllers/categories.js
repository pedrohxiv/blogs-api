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

module.exports = { create };
