const process = require("process");
const shell = require("shelljs");

process.chdir("./dist");
shell.exec(`concurrently "nodemon server.js" "yarn open"`);
