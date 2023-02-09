const { Category } = require('../models');
const { validateCategory } = require('../middlewares/validateData');

const createCategory = async (category) => {
  const categoryAlreadyExists = validateCategory(category);
  if (categoryAlreadyExists) return categoryAlreadyExists;
  const newCategory = await Category.create({ name: category });
  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};