const { server } = require("@discovery-dni/cd-tv.server");
const { join } = require("path");
const { existsSync } = require("fs");

// configure environment variables
const dotenv = require("dotenv");
dotenv.config();

const certDirPath = join(__dirname, "../.dev");
const { APP_URL_PORT } = process.env;

server({
  port: APP_URL_PORT,
  certDirPath: existsSync(certDirPath) ? certDirPath : false
});
