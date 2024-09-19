const express = require('express');
const { userForUsername } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/username', userForUsername, (req, res) => {
  const { user } = req.body;
  res.json({ user: user });
});

module.exports = router;