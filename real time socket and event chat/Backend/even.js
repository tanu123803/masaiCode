const EventEmitter = require('events');

const event = new EventEmitter();

// .on----->listening to the event 
/// .emit ---->triggeriing /calling  the event 

//this is listening to the event
event.on("first_event",()=>{
    console.log("this is first event")
})


//call or trigger the event 
event.emit("first_event")

//socket are gnerally HTTP protocal
//whenever we use socket 
//typically http connection upgradesh into socket
//where establish a connection remains alive
//get /chat HTTP/1.1
//HOST:example.com
//upgrade:websocket
//connection:upgrade