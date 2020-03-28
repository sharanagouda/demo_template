const { plugins } = require("@discovery-dni/cd-tv-dev.babel-preset/browser")();

module.exports = require("babel-jest").createTransformer({
  presets: ["@babel/preset-env"],
  plugins
});
