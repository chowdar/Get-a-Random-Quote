let http = require('http');
let app = require('./app');
let port = 8080;

let server = http.createServer(app);

server.listen( port, () => console.log(`server sucessfully listens to the port: ${port}`))