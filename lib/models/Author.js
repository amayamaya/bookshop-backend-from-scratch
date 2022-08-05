const pool = require('../utils/pool');

class Author {
  id;
  author_name;
  author_dob;
  author_pob_pop;

  constructor(row) {
    this.id = row.id;
    this.author_name = row.author_name;
    this.author_dob = row.author_dob;
    this.author_pob_pop = row.author_pob_pop;
  }

  static async getAll() {
    const { rows } = await pool.query(`
      SELECT * FROM authors;
      `);
    return rows.map((row) => new Author(row));
  }

  // static async getById(id) {
  //   const { rows } = await pool.query(
  //     `
  //     SELECT * FROM authors
  //     WHERE id = $1
  //   `,
  //     [id]
  //   );
  //   if (rows.length === 0) {
  //     return null;
  //   }
  //   return new Author(rows[0]);
  //   //an object that has an authors array
  // }
}

module.exports = { Author };
