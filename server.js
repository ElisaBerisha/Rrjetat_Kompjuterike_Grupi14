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
     // duke treguar input-in e klientit në anën e serverit si një string
     console.log(buffer.toString());
     // konvertimi i input-it në string pa hapësira dhe inicializimi i tij në një variabël të quajtur mesazh
     let message = buffer.toString().trim();
     

    
     if (message == "elisa") {
         console.log("Ky perdorues ka privilegjet: read, write, execute");
         // giving permission to read at a given file
         socket.write("\nDuke shfaqur skedarët aktual të direktorise...");