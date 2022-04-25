import supertest from 'supertest';
import app from '..';



const request = supertest(app);
describe('Test responses from endpoints', () => {
  describe('endpoint: /', () => {
    it('gets /', async () => {
      const response = await request.get('/');
      expect(response.status).toBe(200);
    });
  });
  describe('endpoint: /resizeimage', () => {
    it('gets /resizeimage?filename=fjord (valid args)', async () => {
      const response = await request.get('/resizeimage?filename=fjord');
      expect(response.status).toBe(200);
    });
  });
});
  












































