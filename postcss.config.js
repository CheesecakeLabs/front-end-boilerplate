const autoprefixer = require("autoprefixer");
const postCSSImport = require("postcss-import")();
const postCSSNested = require("postcss-nested");
const postCSSCssVariables = require("postcss-css-variables");
const postCSSCustomMedia = require("postcss-custom-media");
const colorFunction = require("postcss-color-function");
const cssVariables = require("./src/config/css-variables");

const postCSSAutoprefixer = autoprefixer({ browsers: ["IE 9", "iOS 7"] });

module.exports = {
  plugins: [
    postCSSImport,
    postCSSAutoprefixer,
    postCSSNested,
    postCSSCssVariables({
      variables: cssVariables
    }),
    postCSSCustomMedia({
      importFrom: {
        customMedia: {
          "--iphone5-viewport": "(max-height: 570px)",
          "--sm-viewport": "(min-width:320px) and (max-width:640px)",
          "--md-viewport": "(min-width:640px) and (max-width:960px)",
          "--lg-viewport": "(min-width:960px)",
          "--retina-display":
            "(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)"
        }
      }
    }),
    colorFunction
  ]
};
