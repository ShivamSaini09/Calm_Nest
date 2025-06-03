const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app.js');
const http = require('http');

chai.use(chaiHttp);
const expect = chai.expect;

let server;

before(done => {
  server = http.createServer(app).listen(0, () => {
    console.log('Test server started');
    done();
  });
});

after(done => {
  server.close(done);
});

describe('Calm Nest App – Route and API Tests', () => {
  // 1
  it('should return 200 OK on GET /', async () => {
    const res = await chai.request(server).get('/');
    expect(res).to.have.status(200);
  });

  // 2
  it('should serve HTML content type at root', async () => {
    const res = await chai.request(server).get('/');
    expect(res).to.have.header('content-type', /html/);
  });

  // 3
  it('should return 200 OK on GET /api/student', async () => {
    const res = await chai.request(server).get('/api/student');
    expect(res).to.have.status(200);
  });

  // 4
  it('should return JSON response from /api/student', async () => {
    const res = await chai.request(server).get('/api/student');
    expect(res).to.be.json;
  });

  // 5
  it('should include name field in /api/student response', async () => {
    const res = await chai.request(server).get('/api/student');
    expect(res.body).to.have.property('name', 'Aarzoo');
  });

  // 6
  it('should include studentId field in /api/student response', async () => {
    const res = await chai.request(server).get('/api/student');
    expect(res.body).to.have.property('studentId', 's225095435');
  });

  // 7
  it('should return 404 on unknown route', async () => {
    const res = await chai.request(server).get('/nonexistent');
    expect(res).to.have.status(404);
  });

  // 8
  it('should return object from /api/student', async () => {
    const res = await chai.request(server).get('/api/student');
    expect(res.body).to.be.an('object');
  });

  // 9
  it('should return HTML structure on GET /', async () => {
    const res = await chai.request(server).get('/');
    expect(res.text).to.include('<!DOCTYPE html');
  });

  // 10
  it('should return content-type json for /api/student', async () => {
    const res = await chai.request(server).get('/api/student');
    expect(res).to.have.header('content-type', /application\/json/);
  });

  // 11
  it('should respond to multiple /api/student requests in sequence', async () => {
    const res1 = await chai.request(server).get('/api/student');
    const res2 = await chai.request(server).get('/api/student');
    expect(res1).to.have.status(200);
    expect(res2).to.have.status(200);
  });

  // 12
  it('should return non-empty JSON object from /api/student', async () => {
    const res = await chai.request(server).get('/api/student');
    expect(Object.keys(res.body).length).to.be.above(0);
  });

  // 13
  it('should return 200 for root route with static index.html', async () => {
    const res = await chai.request(server).get('/');
    expect(res.text).to.be.a('string');
    expect(res.text.length).to.be.greaterThan(10);
  });
});
