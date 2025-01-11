// const path = require('path');

// module.exports = {
//   entry: './scripts/index.js', // Adjust to your actual entry point
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   mode: 'production',
//   module: {
//     rules: [
//       {
//         test: /\.html$/, // Matches .html files
//         use: ['html-loader'], // Uses html-loader to process them
//       },
//     ],
//   },
// };
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './scripts/index.js', // Your entry file
  output: {
    filename: 'bundle.js', // The output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Cleans the output directory before building
  },
  mode: 'production', // Build mode
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Path to your HTML template
      filename: 'index.html', // Output HTML file name
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Loaders for CSS files
      },
      {
        test: /\.(png|jpe?g|gif|avif)$/i, // Loaders for images
        type: 'asset/resource',
      },
    ],
  },
};
