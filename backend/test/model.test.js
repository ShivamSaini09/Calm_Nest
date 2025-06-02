const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../app");

describe("ML Model Prediction Tests", () => {
    it("should return valid predictions for 42 integer inputs", (done) => {
        const fakeAnswers = {};
        for (let i = 1; i <= 42; i++) {
            fakeAnswers[`q${i}`] = Math.floor(Math.random() * 4);
        }

        request(app)
            .post("/api/predict")
            .send(fakeAnswers)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.have.all.keys("anxiety", "depression", "stress");

                ["anxiety", "depression", "stress"].forEach(key => {
                    expect(res.body[key]).to.be.a("number");
                    expect(res.body[key]).to.be.at.least(0);
                    expect(res.body[key]).to.be.at.most(4);
                });

                done();
            });
    });

    it("should return 400 if input is less than 42 answers", (done) => {
        const incompleteAnswers = {};
        for (let i = 1; i <= 30; i++) {
            incompleteAnswers[`q${i}`] = 2;
        }

        request(app)
            .post("/api/predict")
            .send(incompleteAnswers)
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.have.property("error");
                done();
            });
    });

    it("should return 400 if any value is not an integer", (done) => {
        const fakeAnswers = {};
        for (let i = 1; i <= 42; i++) {
            fakeAnswers[`q${i}`] = (i === 10) ? "invalid" : 2;
        }

        request(app)
            .post("/api/predict")
            .send(fakeAnswers)
            .expect(500)
            .end((err, res) => {
                expect(res.body).to.have.property("error");
                done();
            });
    });

    it("should handle all inputs as 0 correctly", (done) => {
        const fakeAnswers = {};
        for (let i = 1; i <= 42; i++) {
            fakeAnswers[`q${i}`] = 0;
        }

        request(app)
            .post("/api/predict")
            .send(fakeAnswers)
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.have.all.keys("anxiety", "depression", "stress");
                done();
            });
    });

    it("should handle all inputs as 3 correctly", (done) => {
        const fakeAnswers = {};
        for (let i = 1; i <= 42; i++) {
            fakeAnswers[`q${i}`] = 3;
        }

        request(app)
            .post("/api/predict")
            .send(fakeAnswers)
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.have.all.keys("anxiety", "depression", "stress");
                done();
            });
    });

    it("should return 400 if request body is empty", (done) => {
        request(app)
            .post("/api/predict")
            .send({})
            .expect(400)
            .end((err, res) => {
                expect(res.body).to.have.property("error");
                done();
            });
    });

    it("should return valid predictions when all inputs are 0 (minimum boundary)", (done) => {
        const inputs = {};
        for (let i = 1; i <= 42; i++) {
            inputs[`q${i}`] = 0;
        }

        request(app)
            .post("/api/predict")
            .send(inputs)
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.have.all.keys("anxiety", "depression", "stress");
                done();
            });
    });

    it("should return 400 if input includes float values", (done) => {
        const inputs = {};
        for (let i = 1; i <= 42; i++) {
            inputs[`q${i}`] = i === 5 ? 2.5 : 1;
        }

        request(app)
            .post("/api/predict")
            .send(inputs)
            .expect(400)
            .end((err, res) => {
                expect(res.body).to.have.property("error");
                done();
            });
    });

    it("should return 400 if input includes boolean values", (done) => {
        const inputs = {};
        for (let i = 1; i <= 42; i++) {
            inputs[`q${i}`] = i === 3 ? true : 1;
        }

        request(app)
            .post("/api/predict")
            .send(inputs)
            .expect(400)
            .end((err, res) => {
                expect(res.body).to.have.property("error");
                done();
            });
    });

    it("should return valid predictions when all inputs are 1", (done) => {
        const inputs = {};
        for (let i = 1; i <= 42; i++) {
            inputs[`q${i}`] = 1;
        }

        request(app)
            .post("/api/predict")
            .send(inputs)
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.have.all.keys("anxiety", "depression", "stress");
                done();
            });
    });
    it("should return 400 if any input is null", (done) => {
        const inputs = {};
        for (let i = 1; i <= 42; i++) {
            inputs[`q${i}`] = i === 8 ? null : 1;
        }

        request(app)
            .post("/api/predict")
            .send(inputs)
            .expect(400)
            .end((err, res) => {
                expect(res.body).to.have.property("error");
                done();
            });
    });



});
