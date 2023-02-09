const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
      user_id: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      tableName: 'blog_posts',
      timestamps: false,
      underscored: true,
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    });
  };
  return BlogPost;
};

module.exports = BlogPost;
