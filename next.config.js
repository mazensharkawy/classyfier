// next.config.js
const withImages = require("next-images");
const withProgressBar = require("next-progressbar");
// const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
// // module.exports = withImages(withProgressBar())
module.exports = withImages(withProgressBar(withCSS()));