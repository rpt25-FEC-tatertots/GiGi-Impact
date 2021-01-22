const request = require('supertest');
const app = require('./index.js');

test('get locations api test', async () => {
  await request(app)
    .get('/api/locations?product_id=1')
    .expect(200)
    .then(response => {
      expect(typeof response).toBe('object');
    });  
});


test('get locations for product not in database', async () => {
  await request(app)
    .get('/api/locations?product_id=101')
    .expect(404)
});