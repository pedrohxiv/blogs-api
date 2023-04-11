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

const getAll = async (req, res, next) => {
  try {
    const { id } = req.user;

    const posts = await postService.getAll(id);

    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getAll };
