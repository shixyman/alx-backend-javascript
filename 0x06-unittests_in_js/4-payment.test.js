const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');


describe('sendPaymentRequestToApi', function() {
  let utilsStub;
  let consoleLogSpy;

  beforeEach(function() {
    utilsStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    utilsStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with the right arguments and log the correct message', function() {
    sendPaymentRequestToApi(100, 20);
    expect(utilsStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
