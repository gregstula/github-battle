import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  entry: ['babel-polyfill','./app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: ['node_modules'],
        use: 'babel-loader'
      },

      {
        test: /\.css$/, 
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: 'camelCase'
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

export default config;
