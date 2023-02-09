const express = require('express');
const userController = require('../controllers/userController');
const { tokenValidator } = require('../middlewares/validateToken');

const userRouter = express.Router();

userRouter.post('/', userController.createUser);

userRouter.get('/', tokenValidator, userController.getUsers);

userRouter.get('/:id', tokenValidator, userController.getUserById);

userRouter.delete('/me', tokenValidator, userController.deleteUser);

module.exports = {
  userRouter,
};
