/* eslint-disable */

var webpack = require('webpack');
var resolve = require('path').resolve;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = env => {
  env = env || {};
  var addPlugin = (add, plugin) => add ? plugin : undefined;
  var ifProd = plugin => addPlugin(env.prod, plugin);
  var removeEmpty = array => array.filter(i => !!i);
  var plugin = {
    'process.env': {
      NODE_ENV: JSON.stringify(ifProd('production') || 'development'),
    },
  };
  var dir = env.server ? 'server' : 'client';
  return {
    target: env.server ? 'node' : undefined,
    entry: ['babel-polyfill', './index.js'],
    output: {
      filename: env.server ? 'server.js' : 'bundle.js',
      path: resolve(__dirname, 'dist', dir),
      pathinfo: !env.prod,
    },
    context: resolve(__dirname, 'src', dir),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    node: {
      fs: 'empty',
    },
    module: {
      loaders: removeEmpty([
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          exclude: [/node_modules/, /compiled/, /\.asm\.js$/, /prefix\.js$/, /postfix\.js$/],
        },
        {
          test: /\.wasm$/,
          loaders: ['arraybuffer-loader'],
        },
        !env.server && {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ]),
    },
    plugins: removeEmpty([
      ifProd(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        quiet: true,
      })),
      new webpack.DefinePlugin(plugin),
      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // eslint-disable-line
          warnings: false,
        },
      })),
      ifProd(new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      })),
    ]),
  };
};
