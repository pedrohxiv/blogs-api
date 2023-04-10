const jwt = require('jsonwebtoken');

const key = process.env.JWT_SECRET;

const config = {
  expiresIn: '180d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign(payload, key, config);
  return token;
};

module.exports = { generateToken };
