const express = require('express');
const categoryController = require('../controllers/categoryController');
const { tokenValidator } = require('../middlewares/validateToken');

const categoriesRouter = express.Router();

categoriesRouter.post('/', tokenValidator, categoryController.createCategory);
categoriesRouter.get('/', tokenValidator, categoryController.getAllCategories);

module.exports = {
  categoriesRouter,
};
