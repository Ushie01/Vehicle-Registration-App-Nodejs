const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

// A sample user database
const users = [
  {
    id: 1,
    username: 'john',
    password: 'password123'
  },
  {
    id: 2,
    username: 'jane',
    password: 'password456'
  }
];

// JWT secret key
const secretKey = 'mysecretkey';

// Middleware to verify the JWT token in the Authorization header
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    jwt.verify(req.token, secretKey, (err, decoded) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
}

// Route to generate JWT token when user logs in
app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    const token = jwt.sign({ user: { id: user.id, email: user.email } }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
});

// Protected route that requires authentication
app.get('/api/post', verifyToken, (req, res) => {
  res.json({
    message: 'You have successfully accessed the protected API!',
    user: req.user
  });
});
