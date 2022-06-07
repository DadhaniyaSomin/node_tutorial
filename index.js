const http = require("http");
const path = require("path");
const fs = require("fs");
const fsp = require("fs").promises;

const logTime = require("./LodEvents");
const EventEmitter = require("events");
const MyEmitter = new EventEmitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // console.log(req.method);

  let path;

  if ((req.url = "/" || req.url == "index.html")) {
      res.statusCode = 200 ; 
      res.setHeader('Content-Type', 'application/html');
      path  = path.join(__dirname , 'views', 'index.html');
      fs.readFile(path ,'utf8', (err, data) => {
          res.end(data);
      })
  }
});

server.listen(PORT, () => {
  console.log(` Server is Running on ${PORT}`);

});

//add Listner for log Events

// MyEmitter.on('log', (msg) => logTime(msg));

// setTimeout(()=>{
//     MyEmitter.emit('log' , 'first Event ');
// },2000);
