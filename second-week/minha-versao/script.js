/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

/*
const fs = require('fs')

console.log('Primeiro comando')

fs.readFile('./text.txt', callback)
function callback(err, content){
   if(err) return console.error('erro')
   console.log(String(content))
}
console.log('Segundo comando')
console.log('Terceiro comando')

setTimeout(() => console.log('testando o setTimeout'), 3000)

console.log('comando após o setTimeout')
*/

function horario(){
   const date = new Date()
   let stringHoras = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
   return stringHoras
}

setTimeout(() => console.log(horario()), 5000)
setTimeout(() => console.log(horario()), 4000)
setTimeout(() => console.log(horario()), 1000)
