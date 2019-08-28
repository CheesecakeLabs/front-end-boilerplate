const path = require('path')

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
              path: path.resolve('../', process.cwd()),
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
  ]

  return config
}
