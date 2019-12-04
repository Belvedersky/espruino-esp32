const { readdirSync } = require("fs");
const dotenv = require('dotenv');
dotenv.config();

const exec = require('child_process').exec;
const esp = require("espruino");
const inquirer = require("inquirer");

// ignore = [".git", "firmware" ];
let listport = [];


// const ports = exec('espruino --list',
//         (error, stdout, stderr) => {
//           console.log(stdout.split(" /dev/tty."));
//             console.log(stderr);
//             if (error !== null) {
//                 console.log(`exec error: ${error}`);
//             }
//         });

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(dirent => dirent != ".git") // &&  "firmware" && "node_modules")
    .filter(dirent => dirent != "firmware")
    .filter(dirent => dirent != "node_modules")


inquirer
  .prompt([
    {
      type: "list",
      name: "folder",
      message: "What do you want to load?",
      choices: getDirectories("./")
    }
  ])
  .then(answers => {
    const filename = `./${answers.folder}/index.js`;
    upload_code(filename);
  });

const upload_code = (filename)=>{
  esp.init(function() {
    Espruino.Config.BAUD_RATE = process.env.B;
    Espruino.Config.BLUETOOTH_LOW_ENERGY = false;
    esp.sendFile(process.env.PORT, filename, function() {
      console.log('Done!');
    });
  });
}
