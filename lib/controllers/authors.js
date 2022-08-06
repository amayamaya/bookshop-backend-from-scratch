const { Router } = require('express');
const { Author } = require('../models/Author');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const author = await Author.getById(req.params.id);
    res.json(author);
  })

  .get('/', async (req, res) => {
    const author = await Author.getAll();
    res.json(author);
  })

  .post('/', async (req, res) => {
    const author = await Author.insert(req.body);
    if (req.body.book_id) {
      await Promise.all(req.body.bookIds.map((id) => author.addBookById(id)));
    }
    // console.log(author);
    res.json(author);
  });
