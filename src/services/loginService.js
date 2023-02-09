const jwt = require('jsonwebtoken');
const { User } = require('../models');
const {
  validateEmailLogin,
  validatePasswordLogin,
} = require('../middlewares/validateData');

const checkDatabase = async (email, password) => {
  if (!email || !password) {
    return { status: 400, message: 'Some required fields are missing' };
  }
  const emailValidation = await validateEmailLogin(email);
  const passwordValidation = validatePasswordLogin(password);

  if (emailValidation) return emailValidation;
  if (passwordValidation) return passwordValidation;

  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const user = await User.findOne({ where: { email } });
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);
  return { token };
};

module.exports = {
  checkDatabase,
};
