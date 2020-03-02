const path = require('path')

module.exports = {
  resolve: {
    modules: [path.join(__dirname), path.join(__dirname, 'node_modules')],
    extensions: ['.js', '.css'],
    alias: {
      _root: path.resolve(__dirname),
      _storybook: path.resolve(__dirname, 'storybook'),
      _atoms: path.resolve(__dirname, 'src', 'components', 'atoms'),
      _molecules: path.resolve(__dirname, 'src', 'components', 'molecules'),
      _organisms: path.resolve(__dirname, 'src', 'components', 'organisms'),
      _templates: path.resolve(__dirname, 'src', 'components', 'templates'),
      _images: path.resolve(__dirname, 'src', 'static', 'images'),
      _pages: path.resolve(__dirname, 'src', 'pages'),
      _styles: path.resolve(__dirname, 'src', 'styles'),
      _utils: path.resolve(__dirname, 'src', 'utils'),
      _config: path.resolve(__dirname, 'src', 'config'),
      _hocs: path.resolve(__dirname, 'src', 'hocs'),
      _context: path.resolve(__dirname, 'src', 'context'),
      _services: path.resolve(__dirname, 'src', 'services'),
      _hoc: path.resolve(__dirname, 'src', 'hoc'),
      _data: path.resolve(__dirname, 'src', 'data'),
      _hooks: path.resolve(__dirname, 'src', 'hooks'),
      _tests: path.resolve(__dirname, '__tests__'),
    },
  },
}
