// For info about this file refer to webpack and webpack-hot-middleware documentation
// For info on how we're generating bundles with hashed filenames for cache busting: https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.w99i89nsz
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { config } from './src/constants/prodConstants';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  entry: path.resolve(__dirname, 'src/index'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'server', 'static'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [

    // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin(GLOBALS),

    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('styles.css'),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true, // set to false to see a list of every file being bundled.
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'scss')]
        },
        context: '/',
        postcss: () => [autoprefixer],
      }
    }),

    new webpack.DefinePlugin({
      'config': JSON.stringify(config)
    })
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?name=[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]' },
      { test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /(\.css|\.scss)$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!sass-loader?sourceMap') }
    ]
  }
};
