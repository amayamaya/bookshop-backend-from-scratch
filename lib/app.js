const express = require('express');
const app = express();
const path = require('path');

// Built in middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
//When we get a get request for this specific file path - serve up index.html from public

// App routes
app.use('/books', require('./controllers/books'));
app.use('/authors', require('./controllers/authors'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
