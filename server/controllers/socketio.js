/**
 * Created by pengchaoyang on 2018/5/22
 */

const socketio = require('socket.io');
let io = null;

const initialize=(server)=>{
    io = socketio(server);
    io.on('connection',(socket) =>{
        socket.emit('news',{ hello: 'world' });
        socket.on('my other event',(data) =>{
            console.log(data);
        });
        socket.on('disconnect',function() {
            console.log('bye');
        });
        setInterval(()=>{
            socket.emit('time',{ time: new Date() });
        },1000);
    });
};

module.exports={
    initialize
};
