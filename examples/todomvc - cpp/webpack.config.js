/* eslint-disable */

var webpack = require('webpack');
var resolve = require('path').resolve;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = env => {
  var addPlugin = (add, plugin) => add ? plugin : undefined;
  var ifProd = plugin => addPlugin(env.prod, plugin);
  var removeEmpty = array => array.filter(i => !!i);
  var plugin = {
    'process.env': {
      NODE_ENV: JSON.stringify(ifProd('production') || 'development'),
    },
  };
  return {
    entry: ['babel-polyfill', './index.js'],
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    context: resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    node: {
      fs: 'empty',
    },
    devServer: {
      contentBase: resolve(__dirname, 'dist'),
      historyApiFallback: true,
      compress: true,
      port: 9000,
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/, /compiled/, /\.asm\.js$/],
      },
      {
        test: /\.wasm$/,
        loaders: ['arraybuffer-loader'],
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }],
    },
    plugins: removeEmpty([
      new CopyWebpackPlugin([
        { from: '../index.html', to: '../dist/index.html' }
      ]),
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
