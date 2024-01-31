const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = (env, { mode }) => {
  const isDevelopment = mode !== 'production'

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'pages', '_document.jsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'public')
      },
      hot: true,
      port: 3000,
      historyApiFallback: true
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
      rules: [
        {
          // this is so that we can compile any React,
          // ES6 and above into normal ES5 syntax
          test: /\.(js|jsx)$/,
          // we do not want anything from node_modules to be compiled
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
          resolve: {
            extensions: ['.js', '.jsx']
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader', // translates CSS into CommonJS
            'sass-loader' // compiles Sass to CSS, using Node Sass by default
          ]
        },
        {
          test: /\.(gif|png|jpg|jpeg|svg)$/,
          type: 'asset/resource'
        },
        {
          test: /\.(woff(2)?|ttf|eot)$/i,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new Dotenv(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        favicon: './public/favicon.svg',
        inject: 'body'
      })
    ]
  }
}
