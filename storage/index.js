try 
{
  let fs = require("fs");
} 
catch (e) {//'Uncaught Error: Unable to mount media : NO_FILESYSTEM'
  console.log("Formatting FS - only need to do once");
  E.flashFatFS({ format: true });
}
//
fs.writeFileSync(
  "sample.txt",
  `This is the way the world ends
    \n Hello World\nnot with a 
    bang but a whimper.\n`
);

//read file
fs.readFileSync("sample.txt");

// delete file
fs.unlink("sample.txt", function(err) {
  if (err) throw err;
  console.log("File deleted!");
});
    
// free areas
require( "Flash").getFree()