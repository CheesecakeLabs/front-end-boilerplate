const autoprefixer = require('autoprefixer')
const postCSSImport = require('postcss-import')()
const postCSSNested = require('postcss-nested')
const postCSSCssVariables = require('postcss-css-variables')
const postCSSCustomMedia = require('postcss-custom-media')
const colorFunction = require('postcss-color-function')

const cssVariables = require('./src/config/css-variables')

const postCSSAutoprefixer = autoprefixer()

const gridBreakpoints = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1440px',
  retina: {
    minPixelRatio: 1.25,
    minResolution: '120dpi',
  },
}

module.exports = {
  plugins: [
    postCSSImport,
    postCSSAutoprefixer,
    postCSSNested,
    postCSSCssVariables({
      variables: cssVariables,
    }),
    postCSSCustomMedia({
      importFrom: {
        customMedia: {
          '--xs-viewport': `(max-width: ${gridBreakpoints.xs})`,
          '--sm-viewport': `(max-width: ${gridBreakpoints.sm})`,
          '--md-viewport': `(max-width: ${gridBreakpoints.md})`,
          '--lg-viewport': `(max-width: ${gridBreakpoints.lg})`,
          '--xl-viewport': `(max-width: ${gridBreakpoints.xl})`,
          '--xxl-viewport': `(max-width: ${gridBreakpoints.xxl})`,
          '--retina-display': `
          (-webkit-min-device-pixel-ratio: ${gridBreakpoints.retina.minPixelRatio}),
          (min-resolution: ${gridBreakpoints.retina.minResolution})
          `,
        },
      },
    }),
    colorFunction,
  ],
}
