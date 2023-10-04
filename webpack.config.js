const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpack = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/[name].[contenthash].js',
    // publicPath: '/' // for backend
  },
  target: 'web',
  devServer: {
    port: 4500,
    proxy: {
      '/api': {
        target: 'http://localhost:8800', // Proxy Origin 
        secure: false,
        changeOrigin: true,
      }
    },
    static: {
      directory: path.join(__dirname, 'src'),
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]', // Output path for images
        },
      },
      {
        test: /\.(mp4|webm|ogg|ogv)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'videos/[name].[contenthash][ext]', // Output path for videos
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 2000,
      maxSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          name: 'vendors',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new CopyWebpack({
      patterns: [
        {
          from: 'src/images', // image directory origin
          to: 'images', // image directory destination
        },
        {
          from: 'src/videos', // videos directory origin
          to: 'videos', // videos directory destination
        },
      ],
    }),
    new Dotenv(),
  ],
};

// You shouldn't Modify this configuration file for webpack bundler unless you are a tester for webpack js
