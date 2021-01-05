const assert = require('assert');
let request = require('supertest');
const dotenv = require('dotenv');

const baseURL = 'https://staging.api.customerpay.me';
request = request(baseURL);

dotenv.config()
const token = process.env.ACCESS_TOKEN

console.log(token)

describe('GET /notifications', function () {
  it('responds with json and 200 status code', function () {
    request
      .get('/notifications')
      .set('x-access-token', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});

describe('PUT /notifications', function () {
  it('responds with 200 status code', function () {
    request
      .put('/notifications')
      .set('x-access-token', token)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});
