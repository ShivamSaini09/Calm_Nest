const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../app");

describe("Chatbot API Tests", () => {
  it("should return chatbot reply for valid message", (done) => {
    request(app)
      .post("/api/chatbot")
      .send({ message: "Hi, I feel stressed" })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property("reply");
        expect(res.body.reply).to.be.a("string");
        done();
      });
  });

  it("should return 400 for missing message", (done) => {
    request(app)
      .post("/api/chatbot")
      .send({})
      .expect(400)
      .end((err, res) => {
        expect(res.body).to.have.property("error");
        done();
      });
  });

  it("should return 400 for empty message string", (done) => {
    request(app)
      .post("/api/chatbot")
      .send({ message: "" })
      .expect(400)
      .end((err, res) => {
        expect(res.body).to.have.property("error");
        done();
      });
  });
});
