const path = require('path')
const Dotenv = require('dotenv-webpack')

const webpackConfig = require('../webpack.config.resolve')

module.exports = async ({ config }) => {
  const rules = config.module.rules.filter(rule => !rule.test.test('.css'))

  // eslint-disable-next-line no-param-reassign
  config.module.rules = [
    ...rules,
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[local]__[hash:base64:5]',
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname),
            },
          },
        },
      ],
    },
    {
      test: /\.css$/,
      include: /node_modules/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: false,
          },
        },
      ],
    },
    {
      test: /\.(eot|svg|ttf|woff|jpg|png)/,
      use: ['file-loader'],
    },
  ]

  config.plugins.push(
    new Dotenv({
      path: path.join(__dirname, '..', '.env'), // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false, // load '.env.defaults' as the default values if empty.
    })
  )

  // eslint-disable-next-line no-param-reassign
  config.resolve = webpackConfig.resolve

  return config
}
