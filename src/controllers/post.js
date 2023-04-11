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

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await postService.getById(id);

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const { id: userId } = req.user;

    const updatedPost = await postService.update(+id, title, content, +userId);

    return res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;

    await postService.remove(+id, +userId);

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const getBySearch = async (req, res, next) => {
  try {
    const { q } = req.query;

    const posts = await postService.getBySearch(q);

    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getAll, getById, update, remove, getBySearch };
