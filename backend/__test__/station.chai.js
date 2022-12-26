const chai = require("chai");
const expect = chai.expect;

var server = require("../server");

let chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("Station Controller", () => {

    it("Get Station", (done) => {
        chai.request(server)
        .get('/api/station/all')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            done();
        })
    });

    it("Get Station Details", (done) => {

        chai.request(server)
        .get('/api/station/6398536b9ed8d4a2bb7f9a04')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
            // expect(res.statusCode).to.have.all.keys('success');
            done();
        })
    });
});