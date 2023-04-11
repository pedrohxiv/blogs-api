const { Sequelize } = require('sequelize');
const { BlogPost, Category, PostCategory, User } = require('../models');

const httpErrGen = (status, message) => ({ status, message });

const validateFields = async (title, content, categoryIds) => {
  if (!title || !content || !categoryIds) {
    throw httpErrGen(400, 'Some required fields are missing');
  }
  const categories = await Category.findAll({ where: { id: categoryIds } });
  if (categories.length !== categoryIds.length) {
    throw httpErrGen(400, 'one or more "categoryIds" not found');
  }
};

const create = async (title, content, categoryIds, userId) => {
  await validateFields(title, content, categoryIds);

  const newPost = await BlogPost.create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });

  await PostCategory.bulkCreate(
    categoryIds.map((categoryId) => ({
      postId: newPost.id,
      categoryId,
    })),
  );

  return newPost;
};

const getAll = async (userId) => {
  const posts = await BlogPost.findAll({
    where: { userId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  if (!post) throw httpErrGen(404, 'Post does not exist');
  return post;
};

const update = async (id, title, content, userId) => {
  if (id !== userId) {
    throw httpErrGen(401, 'Unauthorized user');
  }
  if (!title || !content) {
    throw httpErrGen(400, 'Some required fields are missing');
  }
  await BlogPost.update({ title, content, updated: new Date() }, { where: { id } });
  const updatedPost = await getById(id);
  return updatedPost;
};

const remove = async (id, userId) => {
  const post = await BlogPost.findOne({ where: { id } });
  if (!post) throw httpErrGen(404, 'Post does not exist');
  if (post.userId !== userId) throw httpErrGen(401, 'Unauthorized user');
  await BlogPost.destroy({ where: { id } });
};

const getBySearch = async (q) => {
  const posts = await BlogPost.findAll({
    where: {
      [Sequelize.Op.or]: [
        { title: { [Sequelize.Op.like]: `%${q}%` } },
        { content: { [Sequelize.Op.like]: `%${q}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

module.exports = { create, getAll, getById, update, remove, getBySearch };
