const assert = require('chai').assert;
const app = require('../app');

describe('In appTest1.js : ', function(){
    it('No Mock test default function: ', function(done){
        assert.equal(app(), 'hello');
        done();
    });
   
});
