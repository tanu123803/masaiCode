module.exports = (allowedRoles = []) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ msg: 'not authenticated' });
    if (!allowedRoles.includes(req.user.role)) return res.status(403).json({ msg: 'forbidden' });
    next();
  };
};
