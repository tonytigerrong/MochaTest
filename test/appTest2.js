const assert = require('chai').assert;
const expect = require('chai').expect;
let mockApp  = require('../app');
let app = require('../app');
const sinon = require('sinon');


let getConnection1 = sinon.stub(mockApp, 'getConnection');
let testFun1 = sinon.stub(mockApp,'testFun1');

describe('In appTest2: ', () => {
    before(()=>{
        getConnection1.restore();
        testFun1.restore();
    });
    it('No Mock testFun1: ', (done)=>{
        assert.equal(app.testFun1(),'testFun1');
        done();
    });
})

describe('In appTest2: ',()=>{
    before(()=>{
        getConnection1.resolves({"result": true});
        getConnection1.rejects({"result": false});
        testFun1.returns("mockhello");
    });
    after(()=>{
        testFun1.restore();
        getConnection1.restore();
    });
    it('Mock testFun1', (done)=>{
        expect(mockApp.testFun1(), 'mockhello');
        done();
    });
    it('No Mock get connection: ', (done)=>{
        app.getConnection().then(
            (con)=>{
                //assert.equal(con.result, true);
                expect(con.result).to.equal(true);
                console.log("[odd]connect is ok");
                done();
            },
            (err)=>{
                assert.equal(err.result, false);
                console.log("[even]connect is fail");
                done();
            }
        );
    });

    it('Mock get connnection ok', (done)=>{
        mockApp.getConnection().then(
            (con)=>{
               assert.equal(con.result, true);
               done();
            },
            (err)=>{
                assert.equal(err.result, false);
                done();
            }
        );
        //sinon.stub.restore();
    });
    
    it('Mock get connection fail',()=>{
        mockApp.getConnection().then(
            (con)=>{
                assert.equal(con.result, true);
             },
            (err)=>{
                assert.equal(err.result, false);
            }
        );
    });
    
});