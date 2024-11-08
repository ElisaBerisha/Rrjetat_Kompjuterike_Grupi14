const net = require('net');
const fs = require('fs'); 
const { exec } = require("child_process"); 

// Krijimi i serverit dhe mesazhi nga i cili bëhet lidhja e adresës dhe portit
const server = net.createServer((socket) => { 
    console.log(  
        'Connection from',
        socket.remoteAddress,
        'port',
        socket.remotePort
    );
   // beginning of getting data from the client
   socket.on('data', (buffer) => { 
    console.log( 
        'Request from',
        socket.remoteAddress,
        'port',
        socket.remotePort
    );