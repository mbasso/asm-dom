var webpack = require('webpack');
var resolve = require('path').resolve;
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env) => {
  env = env || {};
  var addPlugin = (add, plugin) => add ? plugin : undefined;
  var ifProd = plugin => addPlugin(env.prod, plugin);
  var removeEmpty = array => array.filter(i => !!i);
  return {
    entry: './index.js',
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
        exclude: [/node_modules/, /src\/helpers/, /asm\.js$/],
      },
      {
        test: /\.wasm$/,
        loaders: ['arraybuffer-loader'],
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
