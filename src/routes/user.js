const express = require('express');

const { validationToken } = require('../middlewares/auth');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/', userController.create);
router.get('/', validationToken, userController.getAll);
router.get('/:id', validationToken, userController.getById);
router.delete('/me', validationToken, userController.remove);

module.exports = router;
