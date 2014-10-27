var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path');

//simple function to get the extension of your request file
function getExtension(filename) {
    var ext = path.extname(filename||'').split('.');
    return ext[ext.length - 1];
}

//creates a web server on port 50000
http.createServer(function(request, response) {  
    //check request.url for extension
    var fileType =  getExtension(request.url);
    //is an html file
    if(fileType == 'html'){
        fs.readFile('.'+request.url, function (err, data) {
            //url not found
            if (err) {
                response.writeHeader(404, {"Content-Type": "text/plain"});    
                response.write("404 Not Found\n");    
                response.end();  
            } else { 
            console.log('get into html');
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data, 'utf-8'); 
            }
        });
    }
    //is a css file
    else if (fileType == 'css') {
        fs.readFile('.'+request.url, function (err, data) {
            if (err) {
                response.writeHeader(404, {"Content-Type": "text/plain"});    
                response.write("404 Not Found\n");    
                response.end();  
            } else { 
                console.log('does not throw an error');
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.end(data, 'utf-8');
            }
        });
   //is a javascript file
   } else if (fileType == 'js') {
        fs.readFile('.'+request.url, function (err, data) {
            if (err) {
                response.writeHeader(404, {"Content-Type": "text/plain"});    
                response.write("404 Not Found\n");    
                response.end();  
            } else { 
            response.writeHead(200, {'Content-Type': 'application/javascript'});
            response.end(data, 'utf-8');
            }
        });
   }
}).listen(50000);
console.log("Server Running on Localhost:50000");
