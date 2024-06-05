const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request.get('http://localhost:7865', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get('http://localhost:7865', (err, res) => {
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request.get('http://localhost:7865/cart/hello', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('Correct result when :id is a number?', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res) => {
      expect(res.body).to.equal('Payment methods for cart 12');
      done();
    });
  });
});