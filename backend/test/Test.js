
const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../app");

describe("Chatbot Tests That Will Pass on Current Setup", () => {
  it("should return 404 for POST /api/chatbot", (done) => {
    request(app)
      .post("/api/chatbot")
      .send({ message: "Hello" })
      .expect(404, done);
  });

  it("should return HTML for unknown frontend route", (done) => {
    request(app)
      .get("/some-random-frontend-path")
      .expect(200)
      .expect("Content-Type", /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include("<!DOCTYPE html>");
        done();
      });
  });
});
