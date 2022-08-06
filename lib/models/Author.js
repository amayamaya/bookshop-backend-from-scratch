const pool = require('../utils/pool');

class Author {
  id;
  author_name;
  author_dob;
  author_pob_pop;
  books;

  constructor(row) {
    this.id = row.id;
    this.author_name = row.author_name;
    this.author_dob = row.author_dob;
    this.author_pob_pop = row.author_pob_pop;
    this.books = row.books && row.books;
  }

  static async getAll() {
    const { rows } = await pool.query(`
      SELECT * FROM authors;
      `);
    return rows.map((row) => new Author(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT 
      authors.*,
      COALESCE(
        json_agg(to_jsonb(books))
        FILTER (WHERE books.id IS NOT NULL), '[]'
      ) as books FROM authors
      LEFT JOIN book_author on authors.id = book_author.author_id
      LEFT JOIN books on book_author.book_id = books.id
      WHERE authors.id = $1
      GROUP BY authors.id`,
      [id]
    );
    // console.log(rows[0]);
    return new Author(rows[0]);
    //an object that has an authors array
  }
}

module.exports = { Author };
