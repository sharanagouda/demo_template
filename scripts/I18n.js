var fs = require("fs");
var path = require("path");
var csvtojson = require("csvtojson");

var root = path.dirname(__dirname);
var loc = path.join(root, "tmp/I18n");
var locJson = {};

var whitelistedLanguages = [
  "cs",
  "da",
  "de",
  "en-GB",
  "es-ES",
  "fi",
  "fr",
  "it",
  "nl",
  "no",
  "pl",
  "ro",
  "ru",
  "sv-SE"
];

fs.readdir(loc, (err, realms) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  var getRealms = new Promise((resolve, reject) => {
    var validRealms = [];
    realms.forEach(directory => {
      if (whitelistedLanguages.indexOf(directory) > -1) {
        // This is necessary due to the addition of e.g. the ESP folder
        // which contains iOS .strings files in nested folders
        validRealms.push(directory);
      }
    });
    return validRealms.length > 0
      ? resolve(validRealms)
      : reject(new Error("Unable to find any valid realms"));
  });

  getRealms
    .then(realms =>
      realms.map(realm =>
        fs.readdir(loc + "/" + realm, (err, files) => {
          // Find all files in each realm directory
          files.map((file, i) => {
            csvtojson()
              .fromFile(loc + "/" + realm + "/" + file)
              .then(json => {
                json.map(({ key, Translation }) => {
                  if (!locJson[realm]) {
                    locJson[realm] = { map: [] };
                  }
                  if (key && Translation) {
                    locJson[realm].map.push([key, Translation]);
                  }
                });

                if (i === files.length - 1) {
                  fs.writeFile(
                    path.join(root, `src/assets/I18n/${realm}.json`),
                    JSON.stringify(locJson[realm]),
                    err => {
                      // TODO: target brand logic (not currently needed for DPlay so hardcoded)
                      if (err) throw err;
                    },
                    () => console.log("Realm translation complete:", realm)
                  );
                }
              });
          });
        })
      )
    )
    .catch(error => console.log(error.message));
});
