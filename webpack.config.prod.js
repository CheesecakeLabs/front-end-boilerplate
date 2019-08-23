const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RemovePlugin = require('remove-files-webpack-plugin')

const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: '[name].[hash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: '[id].chunk.css',
    }),
    new RemovePlugin({
      before: {
        include: ['dist'],
      },
    }),
  ],
})
