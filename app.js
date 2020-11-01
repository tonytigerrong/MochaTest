const testFun1 = ()=>{
    return 'testFun1';
}
const Promise = require('bluebird');
const getConnection = ()=>{
    return new Promise(function(resolve, reject){
        let random = Math.floor(Math.random() * 101);     // returns a random integer from 0 to 100
        let connection_ok = {
            "result" : true
        };
        let connection_fail = {
            "result" : false
        }
        console.log("random",random);
        if(random%2 === 1){
            resolve(connection_ok);
        }else{
            reject(connection_fail);
        }
    });
    
}
module.exports = function(){
    return "hello";
}
module.exports.testFun1 = testFun1;
module.exports.getConnection = getConnection;