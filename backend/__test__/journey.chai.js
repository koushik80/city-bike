const chai = require("chai");
const expect = chai.expect;

var server = require("../server");

let chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("Journey Controller", () => {

    it("Get Journey", (done) => {
        chai.request(server)
        .get('/api/journey/all')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            done();
        })
    })
});