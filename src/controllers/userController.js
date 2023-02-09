const userService = require('../services/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await userService.createUser(displayName, email, password, image);
  
  if (newUser.message) return res.status(newUser.status).json({ message: newUser.message });
  return res.status(201).json({ token: newUser.token });
};

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const user = req.payload;
  await userService.deleteUser(user.id);
  return res.status(204).json();
};

module.exports = { createUser, getUsers, getUserById, deleteUser };
