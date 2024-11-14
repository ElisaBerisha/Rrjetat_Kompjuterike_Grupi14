const net = require('net');
const readline = require('readline');

// Zëvendësoni 'SERVER_IP' me adresën aktuale të IP serverit tuaj
const host = '192.168.1.7';
var port = 838; 

const client = new net.Socket();


client.connect(port, host, () => {
  console.log('Jeni lidhur me server');
  console.log("Shkruani login: ");
});