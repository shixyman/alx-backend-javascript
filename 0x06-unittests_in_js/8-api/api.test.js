const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request.get('http://localhost:7865/', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get('http://localhost:7865/', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', (done) => {
    request.get('http://localhost:7865/', (err, res, body) => {
      expect(err).to.be.null;
      done();
    });
  });
});
