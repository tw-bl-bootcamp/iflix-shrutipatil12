const server = require('../server');
const chai = require('chai');
const assert = require('assert');
const chaihttp = require('chai-http');

chai.use(chaihttp);

describe('Given wrong login credentials When Pass To LogIn API', () => {
    it('It will return Status Code 422', (done) => {
        let userData = {
            email: "wronginput@gmail.com",
            password: "ab"
        }
        chai.request(server).post('/login').send(userData).end((err, res) => {
            assert.equal(422, res.status);
            done();
        })
    })
})

describe('Given wrong format of email while login When Pass To LogIn API', () => {
    it('It will return Status Code 422', (done) => {
        let userData = {
            email: "wronginput@",
            password: "abc@ABC12"
        }
        chai.request(server).post('/login').send(userData).end((err, res) => {
            assert.equal(422, res.status);
            done();
        })
    })
})


describe('Given wrong format of email and password  while login When Pass To Login API', () => {
    it('It will return Status Code 422', (done) => {
        let userData = {
            email: "wronginput@",
            password: "a"
        }
        chai.request(server).post('/login').send(userData).end((err, res) => {
            assert.equal(422, res.status);
            done();
        })
    })
})
