const { checkDatabase } = require('../services/loginService');

const verifyCredentials = async (req, res) => {
  const { email, password } = req.body;
  const user = await checkDatabase(email, password);

  if (user.message) {
    return res.status(user.status).json({ message: user.message });
  }
  return res.status(200).json({ token: user.token });
};

module.exports = {
  verifyCredentials,
};
