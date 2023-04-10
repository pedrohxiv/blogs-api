const express = require('express');

const { validationToken } = require('../middlewares/auth');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/', userController.create);
router.get('/', validationToken, userController.getAll);

module.exports = router;
