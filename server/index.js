const http = require('http');

const port = 3000;
const host = '127.0.0.1';

const server = http.createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({ result: 'ok' }));
});

server.listen(port, host);
console.log(`Server listening on http://${host}:${port}`);
