const path = require("path");
const config = require("@discovery-dni/cd-tv-dev.webpack-config/config");
const additionalPlugins = require("./options/additional-plugins");
const additionalCopyFiles = require("./options/additional-copy-files");
const additionalGlobalAssets = require("./options/additional-global-assets");

const outputPath = path.resolve(__dirname, "../../dist");

// needed for the css next polyfills in postcss-preset-env
const cssVarsPath = path.resolve(
  __dirname,
  "../../src/assets/css/variables.css"
);

// dev build
module.exports = [
  config({
    isProduction: false,
    outputPath,
    cssVarsPath,
    additionalPlugins,
    additionalCopyFiles,
    additionalGlobalAssets,
    babelPreset: "@discovery-dni/cd-tv-dev.babel-preset/ui-library"
  }),

  // prod build
  config({
    isProduction: true,
    outputPath,
    cssVarsPath,
    additionalPlugins,
    additionalCopyFiles,
    additionalGlobalAssets,
    babelPreset: "@discovery-dni/cd-tv-dev.babel-preset/ui-library"
  })
];
