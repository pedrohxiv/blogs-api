const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const httpErrGen = (status, message) => ({ status, message });

const create = async (displayName, email, password, image = '') => {
  if (displayName.length < 8) {
    throw httpErrGen(400, '"displayName" length must be at least 8 characters long');
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    throw httpErrGen(400, '"email" must be a valid email');
  }
  if (password.length < 6) {
    throw httpErrGen(400, '"password" length must be at least 6 characters long');
  }
  if (await User.findOne({ where: { email } })) {
    throw httpErrGen(409, 'User already registered');
  }
  const newUser = await User.create({ displayName, email, password, image });
  delete newUser.dataValues.password;
  const token = generateToken(newUser.dataValues);
  return token;
};

module.exports = { create };
