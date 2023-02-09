const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
    },
    {
      tableName: 'categories',
      timestamps: false,
      underscored: true,
    },
  );
  return Category;
};

module.exports = Category;
