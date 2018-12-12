const express = require('express');
const router = express.Router();
const db = require('../../../data/helpers/User');

// GET A LIST OF USERS
router.get('/', async (req, res) => {
  const users = await db.getAll();
  res.status(200).json(users);
});

// GET A USER WITH ONLY THEIR POSTS
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db.get(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'There was an error getting the user.' });
  }
});

// REGISTER USER

// LOGIN USER

module.exports = router;