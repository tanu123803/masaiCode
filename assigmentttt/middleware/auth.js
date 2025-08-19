const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async function (req, res, next) {
  try {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ message: 'missing token' });

    const token = auth.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.id).select('-password');
    if (!user) return res.status(401).json({ message: 'user not found' });

    req.user = user; // attach user object
    next();
  } catch (err) {
    console.error('auth middleware error', err);
    return res.status(401).json({ message: 'invalid token' });
  }
};
