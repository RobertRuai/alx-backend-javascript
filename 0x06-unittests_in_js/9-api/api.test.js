const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const url = 'http://localhost:7865/cart';

  it('test response status code of GET/ of the API', (done) => {
    request.get(`${url}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal('Welcome to the payment system'); 
      done();
    });
  });

  it('test response body of GET/ of the API', (done) => {
    request.get(`${url}`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('test response status code with integer id', (done) => {
    const id = 25;
    request.get(`${url}/${id}`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal('Payment methods for cart 25');
      done();
    });
  });

  it('test response status code with invalid id type ', (done) => {
    const id = -'hahaaaa';
    request.get(`${url}/${id}`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
