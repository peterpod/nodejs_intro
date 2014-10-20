var fs = require("fs"); 

function ls(dir) {
  // If a filename parameter is not provided, give an error and exit
  if (!dir) {
    fs.readdir(".",  				  // read the current directory "."
			function(err,files) {		// a callback for when the directory read is complete
			if (err) {            // with asynch methods, errors are returned as a callback argument
			  console.error(err); // print the error to the console (or more precisely, to stderr)
			  process.exit(1);    // exit the program with an error code
			}
			files.forEach(function(file) {    // for each element of the array of file names
				console.log(file);              // print it to the console
				}) ;
			} );
  }
	else {
		fs.readdir(dir,  				  // read the current directory "."
			function(err,files) {		// a callback for when the directory read is complete
			if (err) {            // with asynch methods, errors are returned as a callback argument
			  console.error(err); // print the error to the console (or more precisely, to stderr)
			  process.exit(1);    // exit the program with an error code
			}
			files.forEach(function(file) {    // for each element of the array of file names
				console.log(file);              // print it to the console
				}) ;
			} );
	}
}  

var dir=process.argv[2];
ls(dir)
