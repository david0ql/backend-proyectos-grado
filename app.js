const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('express');
const { development } = require ('./router/development');
const { production } = require ('./router/production');

app.use(bodyParser.json())
   .use(urlencoded({extended : true}))
   .use('/development', development)
   .use('/production', production)

const server = require('http').createServer(app);

const io = require('socket.io')(server);
io.on('connection', (e) => { 
    console.log("Client connected")
 });

server.listen(9091);