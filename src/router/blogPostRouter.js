const express = require('express');
const blogPostController = require('../controllers/blogPostController');
const { tokenValidator } = require('../middlewares/validateToken');
const { authUpdate } = require('../middlewares/authUpdate');

const blogPostRouter = express.Router();

blogPostRouter.post('/', tokenValidator, blogPostController.createPost);

blogPostRouter.get('/', tokenValidator, blogPostController.getPosts);

blogPostRouter.get('/search', tokenValidator, blogPostController.searchPost);

blogPostRouter.get('/:id', tokenValidator, blogPostController.getPostById);

blogPostRouter.put(
  '/:id',
  tokenValidator,
  authUpdate,
  blogPostController.updatePost,
);

blogPostRouter.delete(
  '/:id',
  tokenValidator,
  authUpdate,
  blogPostController.deletePost,
);

module.exports = {
  blogPostRouter,
};
