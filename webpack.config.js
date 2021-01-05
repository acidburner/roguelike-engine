const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: "development",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/index.html", to: "index.html" },
        { from: "./src/css/styles.css", to: "css/styles.css" },
      ],
    }),
  ]
};