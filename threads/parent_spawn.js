const cp = require('child_process');
const spawn = cp.spawn;
const test = 'C:\\DevEnv\\NodejsDemos\\mochatest\\threads\\run_child.bat';
/*
const c = spawn('cmd.exe', ['/c ', test]);

c.on('message',(msg)=>{
    var count = Math.floor(Math.random()*100);
    console.log("PARENT: message recieve from CHILDE",msg);
    c.send(count);
});
*/
cp.execSync(test,null,(err,stdout, stderr)=>{
    console.log(stdout);
});