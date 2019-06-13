const path = require('path')

const dotenv = require('dotenv')

dotenv.config()

const isProduction = process.env.APP_ENV === 'production'

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src', 'index.js')],
  },
  mode: process.env.APP_ENV,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ? '[name].[hash].js' : '[name].js',
    publicPath: '/static/',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json',
  },
}
