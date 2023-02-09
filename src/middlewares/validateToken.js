const jwt = require('jsonwebtoken');

const tokenValidator = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.payload = decoded.data;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { tokenValidator };
