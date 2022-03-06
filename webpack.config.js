const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'assets/[hash].[query].[ext]',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|webp|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // in case you need some node.js polifills
    // fallback: {
    //   assert: require.resolve('assert'),
    //   buffer: require.resolve('buffer'),
    //   console: require.resolve('console-browserify'),
    //   constants: require.resolve('constants-browserify'),
    //   crypto: require.resolve('crypto-browserify'),
    //   domain: require.resolve('domain-browser'),
    //   events: require.resolve('events'),
    //   http: require.resolve('stream-http'),
    //   https: require.resolve('https-browserify'),
    //   os: require.resolve('os-browserify/browser'),
    //   path: require.resolve('path-browserify'),
    //   punycode: require.resolve('punycode'),
    //   process: require.resolve('process/browser'),
    //   querystring: require.resolve('querystring-es3'),
    //   stream: require.resolve('stream-browserify'),
    //   string_decoder: require.resolve('string_decoder'),
    //   sys: require.resolve('util'),
    //   timers: require.resolve('timers-browserify'),
    //   tty: require.resolve('tty-browserify'),
    //   url: require.resolve('url'),
    //   util: require.resolve('util'),
    //   vm: require.resolve('vm-browserify'),
    //   zlib: require.resolve('browserify-zlib'),
    // },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      hash: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/assets', to: 'assets' },
        { from: './src/assets/favicon.ico', to: 'favicon.ico' },
        { from: './src/assets/robots.txt', to: 'robots.txt' },
      ],
    }),
  ],
  // mode: 'production',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, './src/assets'),
    },
    hot: true,
    host: '0.0.0.0',
    port: 3300,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          enforce: true,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 1024768,
    maxAssetSize: 1024768,
  },
};
