const app = require('./index.js');
const supertest = require('supertest');
const request = supertest(app);

test('get locations api test', async () => {
  await request.get('/api/locations?product_id=1')
    .expect(200)
    .then(response => {
      expect(typeof response).toBe('object');
    });  
});


test('get locations for product not in database', async () => {
  await request.get('/api/locations?product_id=101')
    .expect(404)
});