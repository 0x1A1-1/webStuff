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
