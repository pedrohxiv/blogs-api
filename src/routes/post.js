const express = require('express');

const { validationToken } = require('../middlewares/auth');

const postController = require('../controllers/post');

const router = express.Router();

router.post('/', validationToken, postController.create);
router.get('/', validationToken, postController.getAll);
router.get('/search', validationToken, postController.getBySearch);
router.get('/:id', validationToken, postController.getById);
router.put('/:id', validationToken, postController.update);
router.delete('/:id', validationToken, postController.remove);

module.exports = router;
