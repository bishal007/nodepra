// const http = require('http');
// const fs = require('fs');
// const path = require('path');
//
// const hostName = 'localhost';
// const port = 3000;
//
// const server = http.createServer((req,res) => {
//     console.log(req.url + req.method);
//     var GET;
//     if(req.method === GET){
//         var fileURL;
//         if(req.URL == '/'){
//             fileURL = './index.html'
//
//     }else{
//         fileURL = req.URL
//     }
//     }
//     var filePath = path.resolve('./public'+fileURL);
//     const fileExt = path.extname(filePath);
//     if ( fileExt == '.html'){
//         fs.exists(filePath, (exists)=>{
//             if(!exists){
//                 res.statusCode = 404;
//                 res.setHeader('content-type', 'text/html');
//                 res.end('<html><body><p> not exists </p></body></html>')
//             }
//             res.statusCode = 200;
//             res.setHeader('content-type', 'text/html');
//             res.createReadStream(filePath).pipe(res);
//         })
//     }else{
//         res.statusCode = 404;
//         res.setHeader('content-type', 'text/html');
//         res.end('<html><body><p> not a html file </p></body></html>')
//     }
//     res.statusCode = 200;
//     res.setHeader('content-type', 'text/html');
//     res.end('<html><body><p> hii </p></body></html>')
//
// });
// server.listen(port, hostName, ()=>{});
// -------
// const express = require('express');
// const index = express();
//
// index.get('/',function (req, res) {
//     res.sendfile('home.html');
// });
//
//
// index.listen(3001, ()=>{
//     console.log('working');
// });

// --------
const express = require('express');
const index = express();
var MongoClient = require('mongodb').MongoClient;
format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017', function (err,db) {
    if(!err){
        console.log('connected');
    }else{
        throw err;
    }
    db.close();
});
index.listen(3001, ()=>{
    console.log('working');
});
