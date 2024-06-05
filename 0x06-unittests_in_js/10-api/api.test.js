const express = require('express');
const request = require('request');
const { expect } = require('chai');

const app = require('./api');

describe('API', () => {
  describe('GET /cart/:id', () => {
    it('returns the correct cart information', (done) => {
      request.get('http://localhost:7865/cart/12', (err, res, body) => {
        expect(JSON.parse(body)).to.deep.equal({ id: '12', name: 'Cart', price: 10 });
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('returns the correct payment methods', (done) => {
      request.get('http://localhost:7865/available_payments', (err, res, body) => {
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('returns the correct welcome message', (done) => {
      request.post({
        url: 'http://localhost:7865/login',
        json: { userName: 'Betty' }
      }, (err, res, body) => {
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});