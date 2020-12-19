const chai = require('chai')
const assert = chai.assert
const chaiHttp = require('chai-http')
const { disable } = require('../server')

// import app from server.js
const app = require('../server')

// use chaiHttp module
chai.use(chaiHttp)

describe('Functional Tests', () => {
  describe('Integration tests with chai-http', () => {
    it('Test Get /hello with no name ', (done) => {
      chai
      .request(app)
      .get('/hello')
      .end((err,res) => {
        assert.equal(res.status, 200, 'sesponse status should be 200');
        assert.equal(res.text, "Hello, Guest");
        done();
      })
    })

    it('Test Get /hello with name ', (done) => {
      chai
      .request(app)
      .get('/hello?name=Khun')
      .end((err,res) => {
        assert.equal(res.status, 200, 'sesponse status should be 200');
        assert.equal(res.text, "Hello, Khun");
        done();
      })
    })

    it('send {surname: "Colombo"}', (done) => {
      chai
      .request(app)
      .put('/travellers')
      .send({ surname: 'Colombo' }) // body
      .end((err, res) => {
        assert.equal(res.status, 200, 'response status should be 200');
        assert.equal(res.type, 'application/json', 'Response should be json');
        assert.equal(
          res.body.name,
          'Cristoforo',
          'res.body.name should be "Christoforo"'
        );
        assert.equal(
          res.body.surname,
          'Colombo',
          'res.body.surname should be "Colombo"'
        );
      })
      done()
    })

    it('send {surname : "da Verrazzano"}', (done) => {
      chai
      .request(app)
      .put('/travellers')
      .send({surname : "da Verrazzano"})
      .end((err,res) => {
        assert.equal(res.status, 200, 'response status should be 200');
        assert.equal(res.type, 'application/json', 'Response should be json');
        assert.equal(
          res.body.name,
          'Giovanni',
          'res.body.name should be "Giovanni"'
        );
        assert.equal(
          res.body.surname,
          'da Verrazzano',
          'res.body.surname should be "da Verrazzano"'
        );
      })
      done()
    })

  })
})