const fork = require('child_process').fork;
const c = fork('./threads/child.js');


c.on('message',(msg)=>{
    var count = Math.floor(Math.random()*100);
    console.log("PARENT: message recieve from CHILDE",msg);
    c.send(count);
});
