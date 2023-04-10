const jwt = require('jsonwebtoken');

const key = process.env.JWT_SECRET;

const httpErrGen = (status, message) => ({ status, message });

const validationToken = (req, _res, next) => {
  const { authorization: token } = req.headers;
  if (!token) throw httpErrGen(401, 'Token not found');
  try {
    req.user = jwt.verify(token, key);
    return next();
  } catch (error) {
    throw httpErrGen(401, 'Expired or invalid token');
  }
};

module.exports = { validationToken };
