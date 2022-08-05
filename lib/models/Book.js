const pool = require('../utils/pool');

class Book {
  id;
  title;
  released;
  authors;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
    this.authors = row.authors && row.authors;
    //checking first authors is truthy, if it is, then set it to row.authors
  }

  static async getAll() {
    const { rows } = await pool.query(`
      SELECT * FROM books;
      `);
    return rows.map((row) => new Book(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT 
      books.*,
      COALESCE(
        json_agg(to_jsonb(authors))
        FILTER (WHERE authors.id IS NOT NULL), '[]'
      ) as authors FROM books
      LEFT JOIN book_author on books.id = book_author.book_id
      LEFT JOIN authors on book_author.author_id = authors.id
      WHERE books.id = $1
      GROUP BY books.id`,
      [id]
    );
    return new Book(rows[0]);
    //an object that has an authors array
  }
}

module.exports = { Book };
