const net = require('net');
const readline = require('readline');

// Zëvendësoni 'SERVER_IP' me adresën aktuale të IP serverit tuaj
const host = '172.20.10.7';
var port = 837; 

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