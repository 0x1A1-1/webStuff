//1.
//console.log("HELLO WORLD");

// 2.
// var sum = 0;
// for (var i=2; i<process.argv.length; i++){
//   sum += Number(process.argv[i]);
// };
// console.log(sum);

// 3. Lines of file
// var fs = require('fs');
// var fileBuf = fs.readFileSync(process.argv[2]);
// var lines = contents.toString().split('\n').length - 1 ;
// console.log(lines);

// 4. Lines of file async
// var fs = require('fs')
// var file = process.argv[2]
// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })

//5. Async Read path with extension
// var fs = require('fs');
// var path = require('path');
// var addr = process.argv[2];
// var extension = process.argv[3];
//
// fs.readdir(addr, function(err, list){
//   for(var i=0; i<list.length; i++){
//     if( extension==undefined || path.extname(list[i]).substring(1)==extension){
//       console.log(list[i]);
//     }
//   }
// })

// 6. Modulerize
// var addr = process.argv[2];
// var extension = process.argv[3];
// var myModule = require('./readdirMod.js');
// myModule(addr, extension, function(err, list){
//   if(err){
//     console.error("Hey Something is wrong");
//   }
//   list.forEach(function(file){
//     console.log(file);
//   })
// })

//7.HTTP Client
// var http = require('http');
// var addr = process.argv[2];
// http.get(addr, function(resource){
//   resource.setEncoding('utf8');
//   resource.on('data', (chunk)=>{
//     console.log(chunk);
//   })
// })

// 8.HTTP Collection
// var http = require('http');
// var addr = process.argv[2];
// http.get(addr, function(resource){
//   resource.setEncoding('utf8');
//   var chars = 0;
//   var completeString = ""
//   resource.on('data', (chunk)=>{
//     chars += chunk.length
//     completeString += chunk
//   });
//   resource.on('end', ()=>{
//     console.log(chars);
//     console.log(completeString);
//   })
// });

// 8.2 Third party package collection
// var http = require('http');
// var bl = require('bl');
// var addr = process.argv[2];
// http.get(addr, (response)=>{
//     response.pipe(bl(function(err, data){
//       if(err){
//         console.error("Something's wrong");
//       }
//       console.log(data.toString().length);
//       console.log(data.toString());
//     }))
//   });

//my answer wont work
// var http = require('http');
// var bl = require('bl');
// var finished = 0;
// var message = [];
// for(var i=2; i<5; i++){
//   http.get(process.argv[i], (response)=>{
//     response.setEncoding('utf8');
//     var messagePiece;
//     response.on('data', function(chunk){
//              messagePiece += chunk;
//         });
//     response.on('end', function(chunk){
//            message[finished] = messagePiece;
//            finished ++;
//            if(finished==3)  {
//              message.forEach(function(line){
//                console.log(line);
//            })
//          }
//        });
//     })
//   }

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
 for (var i = 0; i < 3; i++)
   console.log(results[i])
}

function httpGet (index) {
 http.get(process.argv[2 + index], function (response) {
   response.pipe(bl(function (err, data) {
     if (err)
       return console.error(err)

     results[index] = data.toString()
     count++

     if (count == 3)
       printResults()
   }))
 })
}

for (var i = 0; i < 3; i++)  
 httpGet(i)
