
  const EventEmitter = require('events');
//   const emitter=new EventEmitter();

  // console.log(__filename);
    // console.log(__dirname);
    var url="http://mylogger.io/log";

    class Logger extends EventEmitter{
         log(message){
            //send an http message
            console.log(message);
            //raise event
            this.emit('messageLogged',{id:1, url:'http://'});
    
        }
    }

    // function log(message){
    //     //send an http message
    //     console.log(message);
    //     //raise event
    //     emitter.emit('messageLogged',{id:1, url:'http://'});

    // }


    module.exports=Logger;
    // module.exports.log=log;
    // // module.exports.url=url
    // module.exports=log;
 















// (function(exports,require,module,__filename,__dirname){
// var url="http://mylogger.io/log";
// function log(message){
//     //send an http message
//     console.log(message);
// }

// // module.exports.log=log
// // module.exports.url=url
// module.exports=log;
// })