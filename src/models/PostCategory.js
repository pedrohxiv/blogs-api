module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    },
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'category_id',
      as: 'blog_posts',
      through: PostCategory,
      otherKey: 'post_id',
    });
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'post_id',
      as: 'categories',
      through: PostCategory,
      otherKey: 'category_id',
    });
  };

  return PostCategory;
};
