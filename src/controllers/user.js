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

module.exports = { create };
