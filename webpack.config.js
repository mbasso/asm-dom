var webpack = require('webpack');
var resolve = require('path').resolve;
var BrotliPlugin = require('brotli-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env) => {
  env = env || {};
  var addPlugin = (add, plugin) => add ? plugin : undefined;
  var ifProd = plugin => addPlugin(env.prod, plugin);
  var removeEmpty = array => array.filter(i => !!i);
  return {
    entry: env.cpp ? './cpp/index.js' : './js/index.js',
    target: 'node',
    output: {
      library: 'asmDom',
      libraryTarget: 'umd',
    },
    context: resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/, /compiled/, /src\/helpers/, /\.asm\.js$/],
      }],
    },
    plugins: removeEmpty([
      new webpack.optimize.OccurrenceOrderPlugin(),
      ifProd(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        quiet: true,
      })),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(ifProd('production') || 'development'),
      }),
      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
          screw_ie8: true,
        },
      })),
      ifProd(
        new CompressionPlugin({
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8,
          asset: '[path].gz[query]',
          algorithm: 'gzip'
        })
      ),
      ifProd(
        new BrotliPlugin({
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8,
          asset: '[path].br[query]'
        })
      ),
    ]),
  };
};
