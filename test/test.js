var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('hello world, This is developed by Thirumalai Aiyalu as a Jenkins Demo - edited 1 time', done);
  });
});
