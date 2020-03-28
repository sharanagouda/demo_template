const { minimized } = require("@discovery-dni/cd-tv-dev.webpack-config/utils");
const context = "./node_modules";

module.exports = ({ isProduction }) => [
  {
    from: `@discovery-dni/np2-worker/dist/np2-worker.iife${minimized(
      isProduction
    )}.js`,
    to: "static/np2-worker/",
    context
  },
  {
    from: `@discovery-dni/np2-worker/dist/np2-worker.iife.js.map`,
    to: "static/np2-worker/",
    context
  },
  {
    from: `@discovery-dni/np2-player-html5/dist/np2-player-html5.iife${minimized(
      isProduction
    )}.js`,
    to: "static/np2-player-html5/",
    context
  },
  {
    from: `@discovery-dni/np2-player-html5/dist/np2-player-html5.iife.js.map`,
    to: "static/np2-player-html5/",
    context
  },
  {
    from: `@discovery-dni/np2-player-shaka/dist/np2-player-shaka.iife${minimized(
      isProduction
    )}.js`,
    to: "static/np2-player-shaka/",
    context
  },
  {
    from: `@discovery-dni/np2-player-shaka/dist/np2-player-shaka.iife.js.map`,
    to: "static/np2-player-shaka/",
    context
  },
  {
    from: `@discovery-dni/np2-player-hlsjs/dist/np2-player-hlsjs.iife${minimized(
      isProduction
    )}.js`,
    to: "static/np2-player-hlsjs/",
    context
  },
  {
    from: `@discovery-dni/np2-player-hlsjs/dist/np2-player-hlsjs.iife.js.map`,
    to: "static/np2-player-hlsjs/",
    context
  },
  {
    from: `@discovery-dni/np2-player-avplay/dist/np2-player-avplay.iife${minimized(
      isProduction
    )}.js`,
    to: "static/np2-player-avplay/",
    context
  },
  {
    from: `@discovery-dni/np2-player-avplay/dist/np2-player-avplay.iife.js.map`,
    to: "static/np2-player-avplay/",
    context
  },
  {
    from: `@discovery-dni/np2-player-webmaf/dist/np2-player-webmaf.iife${minimized(
      isProduction
    )}.js`,
    to: "static/np2-player-webmaf/",
    context
  },
  {
    from: `@discovery-dni/np2-player-webmaf/dist/np2-player-webmaf.iife.js.map`,
    to: "static/np2-player-webmaf/",
    context
  },
  {
    from: `@discovery-dni/np2-player-exoplayer/dist/np2-player-exoplayer.iife${minimized(
      isProduction
    )}.js`,
    to: "static/np2-player-exoplayer/",
    context
  },
  {
    from: `@discovery-dni/np2-player-exoplayer/dist/np2-player-exoplayer.iife.js.map`,
    to: "static/np2-player-exoplayer/",
    context
  }
];
