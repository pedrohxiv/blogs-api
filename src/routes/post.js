const express = require('express');

const { validationToken } = require('../middlewares/auth');

const postController = require('../controllers/post');

const router = express.Router();

router.post('/', validationToken, postController.create);
router.get('/', validationToken, postController.getAll);
router.get('/:id', validationToken, postController.getById);
router.put('/:id', validationToken, postController.update);

module.exports = router;
