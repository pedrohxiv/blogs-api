const { BlogPost, Category, PostCategory } = require('../models');

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

module.exports = { create };
