const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV;
const PRODUCTION = mode == 'production';

const prodCilentConfig = {
  mode: 'production',
  entry: './src/sticky-timeline.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '/dist'),
    libraryTarget: 'commonjs2'
  },
  
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  devtool: false,

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([{ from: './src/index.d.ts', to: './' }])
  ],

  externals: {
    'react': 'react',
    'react-waypoint': 'react-waypoint'
  }
};

module.exports = prodCilentConfig;
