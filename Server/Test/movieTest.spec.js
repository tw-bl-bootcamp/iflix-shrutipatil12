const server = require('../server');
const chai = require('chai');
const assert = require('assert');
const chaihttp = require('chai-http');

chai.use(chaihttp);

describe('Given empty request Url for movieShow API', () => {
    it('It will return Status Code 404', (done) => {
        let movieData = {
            title: "Avengers",
            rating: "G",
            review:"4.5"
        }
        chai.request(server).get(' ').send(movieData).end((err, res) => {
            assert.equal(404, res.status);
            done();
        })
    })
})

describe('Given correct request Url for movieShow API', () => {
    it('It will return Status Code 200', (done) => {
        let movieData = {
            title: "Avengers",
            rating: "G",
            review:"4.5"
        }
        chai.request(server).get('/movieShows').send(movieData).end((err, res) => {
            assert.equal(200, res.status);
            done();
        })
    })
})

describe('Given empty request Url for movieShow API', () => {
    it('It will return Status Code 404', (done) => {
        let movieData = {
            title: "Avengers",
            rating: "G",
            review:"4.5"
        }
        chai.request(server).get('/Shows').send(movieData).end((err, res) => {
            assert.equal(404, res.status);
            done();
        })
    })
})


