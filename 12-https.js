const { copyFile } = require('fs');
const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        // res.write('welecome to our home page');
        res.end('welecome to our home page');
    }
    else if(req.url=='/about'){
        res.end('Here is our short history');
    }
else{
    res.end(`
        <h1>Ooops!</h1>
        <p>We can not seem to find the page you are looking for</p>
        <a href="/">back Home</a>
    `)
}
});
server.listen(5000);

















//---------os-------------
// const os=require('os');

// const user=os.userInfo();
// // console.log(user);
// //  console.log(`uptime is ${os.uptime()}`);

// const currenOs={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }
// console.log(currenOs);

// const http=require('http')
// const server=http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.write('Hello world');
//         res.end();
//     }
//     if(req.url ==='/api/courses'){
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });
// server.on('connection',(socket)=>{
//     console.log('New connection')
// })
// server.listen(3000);

// console.log('Listening on port 3000...');



//-------------------events-----------
//------------------------------------

// const EventEmitter = require('events');
// const emitter=new EventEmitter();


//Register a listener
// emitter.on('messageLogged',function(){
//     console.log("Listener called");
// });




// const Logger = require('./logger');
// const logger=new Logger();
// //Register a listener
// logger.on('messageLogged',(arg)=>{
//     console.log("Listener called: ",arg);
// });
// logger.log('message');

// const log = require('./logger');
// console.log('message');

//Making a noise ,produce signoling
//Raise event
// emitter.emit('messageLogged');
//using many emmitters,events
// emitter.emit('messageLogged',{id:1, url:'http://'});








//filesystem with sync
// const fs=require('fs')
// fs.readdirSync('./');
// const files = fs.readdirSync('./');
// console.log(files);
// fs.readdir('./',function(err,files){
//     if(err) console.log('Error',err);
//     else console.log('Result',files);
// });
//find filesystem
// const os= require('os');
// var totalMemory=os.totalmem()
// var freeMemory=os.freemem();
// console.log('Total Memory: '+totalMemory);
// //template string
// //ES6/ES2015:ECMAScript 6
// console.log(`Total Memory:${totalMemory}`)
// console.log(`Total Memory:${freeMemory}`)
//find filename
// const path=require('path');
// var pathObj=path.parse(__filename);

// console.log(pathObj);


// const log=require('./logger');

// // logger=1;
// log('message');