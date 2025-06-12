export const adminOnly = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  res.status(403).json({ message: 'Access denied: Admins only' });
};
