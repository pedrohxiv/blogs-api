const userService = require('../services/user');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const newUser = await userService.create(displayName, email, password, image);

    return res.status(201).json({ token: newUser });
  } catch (error) {
    return next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const users = await userService.getAll();

    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await userService.getById(+id);

    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

module.exports = { create, getAll, getById };
