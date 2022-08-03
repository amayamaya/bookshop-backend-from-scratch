const { Router } = require('express');
const { Book } = require('../models/Book');
const router = Router();

router.get('/', async (req, res) => {
  const book = await Book.getAll();
  res.json(book);
});

module.exports = router;
