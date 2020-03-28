const childProcess = require("child_process");
const fs = require("fs");
const path = require("path");
const detectIndent = require("detect-indent");
const detectNewline = require("detect-newline");
const stringifyPackage = require("stringify-package");
const _conventionalRecommendedBump = require("conventional-recommended-bump");
const semver = require("semver");
const denodeify = require("denodeify");

const exec = denodeify(childProcess.exec);
const readFile = denodeify(fs.readFile);
const conventionalRecommendedBump = denodeify(_conventionalRecommendedBump);

const getBump = () =>
  conventionalRecommendedBump({ preset: "angular" }).then(r => r.releaseType);

const gitP = cmd =>
  exec(`git ${cmd}`, { cwd: __dirname }).then(d => d.split("\n").join(""));

const getCurrentVersion = () =>
  readFile(path.resolve(process.cwd(), "./package.json"), "utf8")
    .then(JSON.parse)
    .then(m => m.version);

const getVersionData = () =>
  Promise.all([
    getCurrentVersion(),
    getBump(),
    gitP("rev-parse --abbrev-ref HEAD"),
    gitP("rev-list --count HEAD"),
    gitP("rev-parse --short HEAD")
  ]);

const calculateNewVersion = ([version, bump, branch, revNo, revHash]) => {
  if (!["staging", "develop"].includes(branch)) {
    console.log("Not on a bumpable branch.");
    process.exit(0);
  }

  const newVersion = semver.inc(version, bump);
  return `${newVersion}-${branch}.${revNo}+${revHash}`;
};

const wrightFile = version => {
  ["package.json", "package-lock.json", "npm-shrinkwrap.json"].forEach(
    filename => {
      let configPath = path.resolve(process.cwd(), filename);
      try {
        let stat = fs.lstatSync(configPath);
        if (stat.isFile()) {
          let data = fs.readFileSync(configPath, "utf8");
          let indent = detectIndent(data).indent;
          let newline = detectNewline(data);
          let config = JSON.parse(data);
          config.version = version;
          fs.writeFileSync(
            configPath,
            stringifyPackage(config, indent, newline),
            "utf8"
          );
        }
      } catch (err) {
        if (err.code !== "ENOENT") console.warn(err.message);
      }
    }
  );
};

Promise.resolve()
  .then(getVersionData)
  .then(calculateNewVersion)
  .then(wrightFile)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
