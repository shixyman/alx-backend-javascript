const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function() {
  let utilsStub;

  beforeEach(function() {
    utilsStub = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function() {
    utilsStub.restore();
  });

  it('should call Utils.calculateNumber with the right arguments', function() {
    sendPaymentRequestToApi(100, 20);
    expect(utilsStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});
