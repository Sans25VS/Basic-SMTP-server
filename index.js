const SMTPServer = require("smtp-server").SMTPServer;

const server = new SMTPServer({
    allowinsecureAuth: true,
    authOptional: true,
    onConnect(session, cb){
        console.log('onConnect', session.id)
        cb() // accept krr liya ho to mail koo
        // cb(new Error('cannot connect')) iska mtlb u are rejecting email
    },
    onMailFrom(address,session,cb){
        console.log('onMailFrom', address.address,session.id)
        cb()
    },
    onRcptTo(address,session,cb){
        console.log('onRcptTo', address.address,session.id)
        cb();
    },
    onData(stream,session,cb){
        stream.on('data',(data) => {
            console.log('onData, ${data.toString()}')
        })
            stream.on('end',cb);
        }
    }
);
server.listen(25,()=>
console.log('Server running on port 25'))