import request from 'supertest';
import HttpStatus from 'http-status-codes';
import app from '../../../app';
import { FETCH_RESPONSE_URL } from '../response.url';


describe('/', () => {
  beforeAll((done) => {
    request(app)
      .get(FETCH_RESPONSE_URL)
      .end((err, res) => {
        expect(res.status).toEqual(HttpStatus.OK);
        expect(res.body).toHaveProperty('data');
        done();
      });
  });
});
