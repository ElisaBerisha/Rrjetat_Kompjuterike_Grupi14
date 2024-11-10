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
     
     if (message == "login" || message == "Login") {
        socket.write("Shkruani: Username ");
    } 
    
     else if (message == "elisa") {
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
                            fs.appendFile(fileName, content, (err) => {         
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
                                socket.write("Sheno emrin e fajllit qe do te shenoni(.txt file): ")
                            })
                } else if (action === "read") {
                    socket.write("\nDuke lexuar permbajtjen e file 'readonly.txt' \n");
                    socket.write(fs.readFileSync('readonly.txt', 'utf-8') + "\n");
                } 
        });
        }
        else if (message == "dea" || message == "dion") {
                        console.log("Ky perdorues ka read privilegje");
                        socket.write("\nDuke treguar files ne kete direktori...");
                        fs.readdir(__dirname, (err, files) => { 
                            if (err)
                                socket.write(err);
                            else {
                                socket.write("\nEmrat e file-ve ne kete direktori:");
                                files.forEach(file => { 
                                    socket.write(file + "\n");
                                });
                            }
                            socket.write("Per te lexuar 'readonly.txt' shkruani 'read'");

                            socket.on('data', (action) => {
                                action = action.toString().trim().toLowerCase();
                                if (action === "read") {
                                    socket.write("\nDuke lexuar permbajtjen e file 'readonly.txt' \n");
                                    socket.write(fs.readFileSync('readonly.txt', 'utf-8') + "\n"); //reads the content of the file "readonly.txt" using fs.readFileSync and sends the content back to the client using socket.write(). The file content is read as UTF-8 encoded text.
                       
                                } 
                            });
                        });
        }
        else if (message == "Hello" || message == "hello") {
            socket.write("Hello client!");
}
else if (message == "write.txt") {
            exec("write.txt", (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
            });
            socket.write("\nDuke lexuar permbajtjen e file 'write.txt' \n");
            socket.write(fs.readFileSync('write.txt', 'utf-8') + "\n");
}
else if (message == "readonly.txt") {
    exec("write.txt", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    socket.write("\nDuke lexuar permbajtjen e file 'readonly.txt' \n");
    socket.write(fs.readFileSync('readonly.txt', 'utf-8') + "\n");
}
else {
    socket.write(message.toUpperCase());
 }

});

socket.on('end', () => {
    console.log('Closed', socket.remoteAddress, 'port', socket.remotePort);
   });
});

server.maxConnections = 10;
var port = 837;
server.listen(port, '0.0.0.0');