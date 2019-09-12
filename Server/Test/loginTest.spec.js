const server = require('../server');
const chai = require('chai');
const assert = require('assert');
const chaihttp = require('chai-http');

chai.use(chaihttp);

<<<<<<< HEAD
describe('Given wrong password while login When Pass To LogIn API', () => {
=======
describe('Given wrong login credentials When Pass To LogIn API', () => {
>>>>>>> 20b9f762dd54c70f2bbd443d2dc1ed3a3814a002
    it('It will return Status Code 422', (done) => {
        let userData = {
            email: "wronginput@gmail.com",
            password: "ab"
        }
        chai.request(server).post('/login').send(userData).end((err,res) => {
                assert.equal(422, res.status);
                done();
            })
    })
})  
<<<<<<< HEAD

describe('Given wrong format of email while login When Pass To LogIn API', () => {
    it('It will return Status Code 422', (done) => {
        let userData = {
            email: "wronginput@",
            password: "abc@ABC12"
        }
        chai.request(server).post('/login').send(userData).end((err,res) => {
                assert.equal(422, res.status);
                done();
            })
    })
})  
=======
>>>>>>> 20b9f762dd54c70f2bbd443d2dc1ed3a3814a002
 