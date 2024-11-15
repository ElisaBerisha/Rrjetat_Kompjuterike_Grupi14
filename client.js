const net = require('net');
const readline = require('readline');

// Zëvendësoni 'SERVER_IP' me adresën aktuale të IP serverit tuaj
const host = '192.168.1.8';
var port = 838; 

const client = new net.Socket();


client.connect(port, host, () => {
  console.log('U lidhet me server');
  console.log("Shkruani login(ne lowercase) per te pasur casje per read, write ose execute");
});

client.on('data', (data) => {
  console.log(data.toString('utf-8'));
});

const rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', (line) => {
  client.write(`${line}\n`);
});

rl.on('close', () => {
  client.end();
});