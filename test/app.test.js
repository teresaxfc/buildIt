const chai = require('chai');
const request = require('supertest');
const app = require('../src/app');

const expect = chai.expect;

describe('CI service test', () => {
  it('Should return default home page', () => {
    const result = request(app).get('/');

    return result
      .expect(200)
      .then((response) => {
        expect(response.text).contains('<html lang="en">\n<head>\n');
      });
  });
});

