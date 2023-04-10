const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const httpErrGen = (status, message) => ({ status, message });

const signin = async (email, password) => {
  if (!email || !password) throw httpErrGen(400, 'Some required fields are missing');
  const user = await User.findOne({ where: { email } });
  if (!user) throw httpErrGen(400, 'Invalid fields');
  delete user.dataValues.password;
  const token = generateToken(user.dataValues);
  return token;
};

module.exports = { signin };
