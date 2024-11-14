const net = require('net');
const fs = require('fs'); 
const { exec } = require("child_process"); 

// Krijimi i serverit dhe mesazhi nga i cili bëhet lidhja e adresës dhe portit
const server = net.createServer((socket) => { 
    console.log('Connection from', socket.remoteAddress, 'port', socket.remotePort);

    // Variabla për të mbajtur gjendjen e login dhe përdoruesin e loguar aktualisht
    let loggedIn = false;
    let currentUser = null;

    socket.on('data', (buffer) => { 
        let message = buffer.toString().trim();
        console.log('Request from', socket.remoteAddress, 'port', socket.remotePort);
        console.log(message);

        // Kontrolli për "login" që ripërcakton gjendjen e përdoruesit dhe kërkon Username çdo herë
        if (message.toLowerCase() === "login") {
            loggedIn = true;      // Vendosim `loggedIn` si `true` për të treguar që procesi i login është nisur
            currentUser = null;   // Rivendosim `currentUser` për të siguruar që përdoruesi i mëparshëm nuk ka më qasje
            socket.write("Shkruani: Username ");
            return;
        } 

        // Kontrollojmë nëse kemi një përdorues të loguar
        if (loggedIn && !currentUser) {
            if (message.toLowerCase() === "elisa" || message.toLowerCase() === "dea" || message.toLowerCase() === "dion") {
                currentUser = message.toLowerCase(); // Vendosim përdoruesin aktual
                socket.write(`Ju jeni loguar si ${currentUser}.\n`);

                if (currentUser === "elisa") {
                    console.log("Ky përdorues ka privilegjet: read, write, execute");
                    socket.write("\nDuke shfaqur skedarët aktual të direktorise...");
                    
                    fs.readdir(__dirname, (err, files) => {
                        if (err) {
                            socket.write(err.toString());
                        } else {
                            socket.write("\nEmrat e file-ve në këtë direktori:");
                            files.forEach(file => socket.write(file + "\n"));
                        }
                        socket.write("\nShkruani një veprim (në lowercase): write, execute, ose read");
                    });
                } else {
                    console.log("Ky përdorues ka privilegje të leximit");
                    socket.write("Për të lexuar 'readonly.txt' shkruani 'read'");
                }
            } else {
                socket.write("Emri i përdoruesit është i pavlefshëm. Provoni përsëri me një përdorues të vlefshëm.");
            }
            return;
        } 

        // Kryejmë veprime bazuar në privilegjet e përdoruesit të loguar
        if (currentUser) {
            if (currentUser === "elisa") {
                if (message === "write") {
                    socket.write("Shkruani emrin e file që do të krijoni (.txt file): ");
                    socket.once('data', (fileNameBuffer) => {
                        let fileName = fileNameBuffer.toString().trim();
                        socket.write(`Shkruani përmbajtjen që do të shtoni në ${fileName}: `);

                        socket.once('data', (contentBuffer) => {
                            let content = contentBuffer.toString().trim();
                            fs.appendFile(fileName, content, (err) => {
                                if (err) {
                                    socket.write(`Gabim gjatë shkrimit në ${fileName}.`);
                                } else {
                                    socket.write(`Përmbajtja u shkrua me sukses në ${fileName}`);
                                }
                            });
                        });
                    });
                }