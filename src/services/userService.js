const jwt = require('jsonwebtoken');
const {
  validatePasswordUsers,
  validateEmailUsers,
  validateDisplayNameUsers,
} = require('../middlewares/validateData');
const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const verifyDisplayName = validateDisplayNameUsers(displayName);
  const verifyEmail = await validateEmailUsers(email);
  const verifyPassword = validatePasswordUsers(password);

  if (verifyDisplayName) return verifyDisplayName;
  if (verifyEmail) return verifyEmail;
  if (verifyPassword) return verifyPassword;

  await User.create({ displayName, email, password, image });

  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  
  const user = await User.findOne({ where: { email } });
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);
  return { token };
};

const getUsers = async () => {
  const listOfUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return listOfUsers;
};

const getUserById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  return user;
};

module.exports = { createUser, getUsers, getUserById };
