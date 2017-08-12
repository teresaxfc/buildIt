const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/client');
const BUILD_DIR = path.resolve(__dirname, 'public/js');

const config = {
  entry: `${APP_DIR}'/app/index.jsx'`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.sass$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};

module.exports = config;
