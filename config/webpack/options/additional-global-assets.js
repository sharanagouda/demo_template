const resolve = require("resolve");
const { minimized } = require("@discovery-dni/cd-tv-dev.webpack-config/utils");

module.exports = ({ isProduction }) => {
  const min = minimized(isProduction);
  return [
    {
      outputPath: "static/np2",
      publicPath: "static/np2",
      filepath: resolve.sync(`@discovery-dni/np2/dist/np2.iife${min}.js`, {
        basedir: process.cwd()
      })
    },
    // We'll need to create an np2-ui-luna to replace this
    {
      outputPath: "static/np2-ui-eurosport/",
      publicPath: "static/np2-ui-eurosport/",
      filepath: resolve.sync(
        `@discovery-dni/np2-ui-eurosport/dist/np2-ui-eurosport.iife${min}.js`,
        { basedir: process.cwd() }
      )
    }
  ];
};
