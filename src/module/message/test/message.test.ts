import request from 'supertest';
import HttpStatus from 'http-status-codes'; 
import app from '../../../app';
import { MESSAGE_URL } from '../message.url';
  
describe('/user', () => { 
  beforeAll((done) => {
    request(app)
      .post(MESSAGE_URL)
      .send({
      })
      .end((err, res) => {
        expect(res.status).toEqual(HttpStatus.OK);
        expect(res.body).toHaveProperty('data');
        done();
      });
  });

    it('welcome message', (done) => {
      request(app)
        .post(MESSAGE_URL)
        .send({
          payload:
            '{}',
        })
        .end((err, res) => {
          expect(res.status).toEqual(HttpStatus.OK);
          done();
        });
    });

  it('hobbies', (done) => { 
    request(app)
      .post(MESSAGE_URL)
      .send({
        payload:
          '{}',
      })
      .end((err, res) => {
        expect(res.status).toEqual(HttpStatus.OK);
        done();
      });
  });
});
