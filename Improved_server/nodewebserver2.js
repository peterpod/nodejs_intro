var http = require('http');
var URL = require('url');
var fs = require('fs');
var car = require("./Car.js");

http.createServer(function (request, response) {

  var reqUrl = URL.parse(request.url);
  var fpath = reqUrl.pathname.substring(1);
  var fextension = fpath.split('.').pop();

  //static page
  if(fpath !== 'form.html') {
      // A ReadStream will emit events when data is available, when done, or error
      var rs = fs.createReadStream(fpath);
      rs.setEncoding('utf8'); // set how the printable characters are represented

        switch(fextension) {
        case "html": response.writeHead(200, {"Content-Type": "text/html"});
          break;
        case "css": response.writeHead(200, {"Content-Type": "text/css"});
          break;
        case "js": response.writeHead(200, {"Content-Type": "application/javascript"});
          break;
        }
      
      // Set the callback to handle errors on the file-reading stream
      rs.on('error', function(e) {
         switch(e.code) {
        case "EISDIR": {console.error("Error:  "+fpath+" is a directory");}
          break;
        case "ENOENT": {console.error("Error:  "+fpath+" not found");
        response.writeHead(404, {"Content-Type": "text/html"});
        response.end("<html><body><h1>404 Not found</h1></body></html>");}
          break;
        }
      });
      
      // Set the callback for when a chunk of data is available from the file
      rs.on('data', function(data) {
        // console.log(data);
        response.write(data);
      });
      
      // Set the callback for when the last chunk of data is read from the file
      rs.on('end', function() {
        response.end(); // exit normally
      });
    }
  //dynamic request
  else{
    //parse url for query
    response.writeHead(200, {"Content-Type": "application/json"});
    params = URL.parse(request.url,true).query;
    a = new car(params.brand,params.price,params.year,params.modelnum);
    //return json in response
    response.end(JSON.stringify(a));
  }

}).listen(50000); // Use a non-registered port to have this process listen to
console.log('Server running on localhost:50000');
