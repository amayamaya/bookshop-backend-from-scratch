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
    console.log(res.status);
    expect(res.body.length).toEqual(5);
  });

  it('books/:id should return data from a single book', async () => {
    const res = await request(app).get('/books/1');
    expect(res.body).toHaveProperty('id', '1');
    expect(res.body).toHaveProperty('title', 'Medea');
    expect(res.body).toHaveProperty('released', '431');
  });

  afterAll(() => {
    pool.end();
  });
});
