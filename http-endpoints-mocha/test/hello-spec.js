'use strict';
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe('HTTP routes test', () => {  
  describe('/GET /hello', () => {
    var httpRoot = "https://" + process.env.HTTP_ROOT;
    it('should return 200 with message', (done) => {
      chai.request(httpRoot)
        .get('/hello')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          expect(res.body).to.deep.equal({message: 'Hello Serverless! Hello Mocha! Hello Chai!'});
          done();
        });
    });
  });
});
