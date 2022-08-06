const { Router } = require('express');
const { Book } = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const book = await Book.getById(req.params.id);
    res.json(book);
  })
  .get('/', async (req, res) => {
    const book = await Book.getAll();
    res.json(book);
  })
  .post('/', async (req, res) => {
    const book = await Book.insert(req.body);
    if (req.body.author_id) {
      await Promise.all(req.body.authorIds.map((id) => book.addAuthorById(id)));
    }
    console.log(book);
    res.json(book);
  });
