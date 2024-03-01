const jwt = require('jsonwebtoken');

// Middleware to authenticate the JWT token
function authenticateToken(req, res, next) {
  // Get the JWT token from the request header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Token is in the format "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: 'Authentication failed: Token missing' });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Authentication failed: Invalid token' });
    }

    // If token is valid, store the user in the request object for later use
    req.user = user;

    // Continue to the next middleware or route handler
    next();
  });
}

module.exports = { authenticateToken };
