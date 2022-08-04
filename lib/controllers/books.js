const { Router } = require('express');
const { Book } = require('../models/Book');
const router = Router();

router
  .get('/:id', async (req, res) => {
    const book = await Book.getById(req.params.id);
    if (!book) {
      return res.status(404).send({ message: 'Book not found' });
    }
    res.json(book);
  })

  .get('/', async (req, res) => {
    const book = await Book.getAll();
    res.json(book);
  });

module.exports = router;
