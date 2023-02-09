const { User, Category } = require('../models');

const validateEmailUsers = async (email) => {
  const regex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  
  if (!email) return { status: 400, message: '"email" is required' };
  
  if (!regex.test(email)) return { status: 400, message: '"email" must be a valid email' };
  
  const findUser = await User.findOne({ where: { email } });

  if (findUser) return { status: 409, message: 'User already registered' };
};

const validatePasswordUsers = (password) => {
  if (!password) return { status: 400, message: '"password" is required' };

  if (password.length < 6) {
    return { status: 400, message: '"password" length must be at least 6 characters long' };
  }
};

const validateDisplayNameUsers = (displayName) => {
  if (displayName.length < 8) {
    return {
      status: 400,
      message: '"displayName" length must be at least 8 characters long',
    };
  }
};

const validateEmailLogin = async (email) => {
  if (!email) return { status: 400, message: '"email" is required' };
  if (email === '') return { status: 400, message: '"email" is not allowed to be empty' };
  const findUser = await User.findOne({ where: { email } });
  if (!findUser) return { status: 400, message: 'Invalid fields' };
};

const validatePasswordLogin = (password) => {
  if (!password) return { status: 400, message: '"password" is required' };
  if (password === '') return { status: 400, message: '"password" is not allowed to be empty' };
};

const validateCategory = (category) => {
  if (!category || category === '') return { status: 400, message: '"name" is required' };
};

const validateTitle = (title) => {
  if (!title || title === '') return { status: 400, message: '"title" is required' };
};

const validateContent = (content) => {
  if (!content || content === '') return { status: 400, message: '"content" is required' };
};

const validateCategoryId = async (categoryIds) => {
  if (!categoryIds) {
    return { status: 400, message: '"categoryIds" is required' };
  }
  const verifyCategoryIds = await Category.findAll({
    where: { id: categoryIds },
  });

  if (verifyCategoryIds.length !== categoryIds.length) {
    return { status: 400, message: 'one or more "categoryIds" not found' };
  }
};

const validateFields = (title, content, categoryId) => {
  if (!content) return { status: 400, message: '"content" is required' };
  if (!title) return { status: 400, message: '"title" is required' };
  if (categoryId) return { status: 400, message: '"Categories cannot be edited' };
};

module.exports = {
  validateEmailUsers,
  validatePasswordUsers,
  validateDisplayNameUsers,
  validateEmailLogin,
  validatePasswordLogin,
  validateCategory,
  validateTitle,
  validateContent,
  validateCategoryId,
  validateFields,
};
