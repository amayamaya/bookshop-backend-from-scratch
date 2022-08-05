const { Router } = require('express');
const { Author } = require('../models/Author');
const router = Router();

router
// .get('/:id', async (req, res) => {
//   const authors = await Author.getById(req.params.id);
//   res.json(author);
// })

  .get('/', async (req, res) => {
    const author = await Author.getAll();
    res.json(author);
  });

module.exports = router;
