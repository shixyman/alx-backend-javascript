const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment.js');

describe('sendPaymentRequestToAPI', function() {
  let consoleLogSpy;

  beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleLogSpy.restore();
  });

  it('should call console.log with the right message when called with 100 and 20', function() {
    sendPaymentRequestToAPI(100, 20);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should call console.log with the right message when called with 10 and 10', function() {
    sendPaymentRequestToAPI(10, 10);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
