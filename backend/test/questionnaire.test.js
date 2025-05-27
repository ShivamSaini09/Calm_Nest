const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../app");

describe("Questionnaire API Tests", () => {
  it("should return 201 for 42 valid answers", (done) => {
    const answers = {};
    for (let i = 1; i <= 42; i++) answers[`q${i}`] = 2;

    request(app)
      .post("/api/questionnaire")
      .send(answers)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property("message");
        done();
      });
  });

  it("should return 400 for less than 42 answers", (done) => {
    const answers = {};
    for (let i = 1; i <= 20; i++) answers[`q${i}`] = 1;

    request(app)
      .post("/api/questionnaire")
      .send(answers)
      .expect(400)
      .end((err, res) => {
        expect(res.body).to.have.property("error");
        done();
      });
  });

  it("should return 400 for non-integer answer values", (done) => {
    const answers = {};
    for (let i = 1; i <= 42; i++) answers[`q${i}`] = i === 10 ? "bad" : 1;

    request(app)
      .post("/api/questionnaire")
      .send(answers)
      .expect(400)
      .end((err, res) => {
        expect(res.body).to.have.property("error");
        done();
      });
  });
});
