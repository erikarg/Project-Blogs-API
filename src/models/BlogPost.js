const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
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
      foreignKey: 'userId',
    });
  };
  return BlogPost;
};

module.exports = BlogPost;
