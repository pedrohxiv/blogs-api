const loginService = require('../services/login');

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const login = await loginService.signin(email, password);

    return res.status(200).json({ token: login });
  } catch (error) {
    return next(error);
  }
};

module.exports = { signin };
