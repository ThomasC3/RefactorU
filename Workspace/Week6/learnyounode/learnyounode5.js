// JavaScript File
var fs = require('fs');
var path = require('path');
var mydir = process.argv[2];
var ext1 = process.argv[3]
fs.readdir(mydir, function(err, files){
  if(err){
    throw err
  }
  // console.log(files);
  files.forEach(function(filename){
    var ext = path.ext(filename);
    // if( == ext1){
      console.log(filename);
    
  });
});