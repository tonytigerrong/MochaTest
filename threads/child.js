var count = Math.floor(Math.random()*100);
process.send(count);
process.on('message',(msg)=>{
    count = Math.floor(Math.random()*100);
    console.log("CHILD: message recieve from PARENT", msg);
    process.send(count);
});
