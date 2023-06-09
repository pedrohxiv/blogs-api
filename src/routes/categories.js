const express = require('express');

const { validationToken } = require('../middlewares/auth');

const categoriesController = require('../controllers/categories');

const router = express.Router();

router.post('/', validationToken, categoriesController.create);
router.get('/', validationToken, categoriesController.getAll);

module.exports = router;
