const request = require('supertest');
const app = require('./data/memory');

describe('GET /', () => {
  it('responds with JSON containing "hello"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'hello' }); // Ajusta esto según la respuesta real de tu servidor
  });
});
