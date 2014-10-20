//--------------seed code for cat -------------------------
// include the filesystem module
var fs = require('fs');

var i=0;
process.argv.forEach(function(filename){
i++;
if(i>=3){
  if (!filename) {
    console.error("Usage: node cat <filename>");
    process.exit(1);
  }
  
  // A ReadStream will emit events when data is available, when done, or error
  var rs = fs.createReadStream(filename);
  rs.setEncoding('utf8'); // set how the printable characters are represented
  
  // Set the callback to handle errors on the file-reading stream
  rs.on('error', function(e) {
    switch(e.code) {
    case "EISDIR": console.error("Error:  "+filename+" is a directory");
      break;
    case "ENOENT": console.error("Error:  "+filename+" not found");
      break;
    }
  });
  
  // Set the callback for when a chunk of data is available from the file
  rs.on('data', function(data) {
    console.log(data);
  });
  
  // Set the callback for when the last chunk of data is read from the file
  rs.on('end', function() {
    process.exit(0);  // exit normally
  });
}
});
