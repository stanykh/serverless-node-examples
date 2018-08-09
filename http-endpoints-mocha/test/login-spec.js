'use strict';
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe('HTTP routes test', () => {  
  describe('/POST /login', () => {
    var httpRoot = "https://" + process.env.HTTP_ROOT;
    it('should return 200 with message', (done) => {
      chai.request(httpRoot)
        .post('/login')
        .set('content-type', 'application/json')
        .send({username: 'annonymous', password: 'foryoutoknow'})
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          expect(res.body).to.deep.equal({role: 'admin', username: 'annonymous'});
          done();
        });
    });
  });
});
