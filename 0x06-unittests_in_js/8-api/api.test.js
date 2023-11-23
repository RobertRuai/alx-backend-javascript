const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const url = 'http://localhost:7865';

  it('test response status code of GET/ of the API', (done) => {
    request.get(`${url}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('test response body of GET/ of the API', (done) => {
    request.get(`${url}/`, (err, res, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('test for correct HTTP methods of GET request', (done) => {
    request.get(`${url}/`, (err, res, body) => {
      expect(res.request.req.method).to.be.equal('GET');
      done();
    });
  });
});
