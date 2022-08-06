const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/books should return a list of books', async () => {
    const res = await request(app).get('/books');
    // console.log(res.status);
    expect(res.body.length).toEqual(5);
  });

  it('/authors should return a list of authors', async () => {
    const res = await request(app).get('/authors');
    // console.log(res.status);
    expect(res.body.length).toEqual(4);
  });

  it('books/:id should return data from a single book', async () => {
    const res = await request(app).get('/books/1');
    expect(res.body).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      released: expect.any(String),
      authors: expect.any(Array),
    });
  });

  it('/authors/:id should return data from a single author', async () => {
    const resp = await request(app).get('/authors/2');
    // console.log(resp.body);
    expect(resp.body).toEqual({
      id: expect.any(String),
      author_name: expect.any(String),
      author_dob: expect.any(String),
      author_pob_pop: expect.any(String),
      books: expect.any(Array),
    });
  });

  it('/books should create a new book', async () => {
    const resp = await request(app)
      .post('/books')
      .send({
        title: 'Something Different',
        released: '2222',
        authors: ['1', '2'],
      });
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      released: expect.any(String),
      authors: expect.any(Array),
    });
  });

  afterAll(() => {
    pool.end();
  });
});
