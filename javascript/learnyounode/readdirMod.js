
var fs = require('fs');
var path = require('path');

module.exports = function printDir(addr, extension, callback){
  fs.readdir(addr, function(err, list){
    if(err){
      return callback(err);
    }else{
      for(var i=0; i<list.length ; i++){
        if( extension==undefined || path.extname(list[i]).substring(1)==extension){
          callback(list[i]);
        }
      }
    }
  })
}
