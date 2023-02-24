var http = require('http'); // 1 - Import Node.js core module
const { Http2ServerRequest } = require('http2');

var server = http.createServer(function (req, res) {   // 2 - creating server

    if (req.url == '/ventes/test') {
        res.write('Home serveur ventes !');
    }

    //http.get('http://localhost:3001/ventes/test', (resp) => {
    //resp.console.log("Home serveur ventes !");

});

server.listen(3001); //3 - listen for any incoming requests