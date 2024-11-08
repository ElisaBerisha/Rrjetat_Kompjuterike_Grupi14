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

   socket.on('data', (buffer) => { 
    console.log( 
        'Request from',
        socket.remoteAddress,
        'port',
        socket.remotePort
    );

     console.log(buffer.toString());
     
     let message = buffer.toString().trim();
     

    
     if (message == "elisa") {
         console.log("Ky perdorues ka privilegjet: read, write, execute");
    
         socket.write("\nDuke shfaqur skedarët aktual të direktorise...");

         fs.readdir(__dirname, (err, files) => {
            if (err)
                socket.write(err);
            else {
                socket.write("\nEmrat e file-ve ne kete direktori:");
                files.forEach(file => {
                    socket.write(file + "\n");
                });
            }
            socket.write("\nShkruani nje veprim (ne lowercase): write, execute, or read");
        });

        socket.on('data', (action) => {
            action = action.toString().trim().toLowerCase();
                if (action === "write") {
                    socket.write("Sheno emrin e fajllit qe do te shenoni(.txt file): ");

                    socket.once('data', (fileName) => {
                        fileName = fileName.toString().trim();
                        socket.write(`Permbajtja per t'u shkruajtur ${fileName}: `);

                       
                        socket.once('data', (content) => {
                            content = content.toString().trim();
                           
                                if (err) {
                                    socket.write(`Gabim gjate shkrimit ne ${fileName}.`);
                                } else {
                                    socket.write(`Permbajtja u shkrua me sukses ne ${fileName}`);
                                }
                            });
                        });
                    });
                } else if (action === "execute") {
                    socket.write("\nCilin file doni te ekzekutoni?");
                            fs.readdir(__dirname, (err, files) => {
                                if (err)
                                    socket.write(err);
                                else {
                                    socket.write("\nEmrat e file-ve ne kete direktori:");
                                    files.forEach(file => {
                                        socket.write(file + "\n");
                                    })
                                }
