const postService = require('../services/post');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;

    const newPost = await postService.create(title, content, categoryIds, id);

    return res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
