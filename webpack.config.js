const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
        exclude: /\.(woff|woff2|eot|ttf|otf)$/i,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
        exclude: /\.(png|jpe?g|gif|svg)$/i,
      },
      {
        test: /\.(mp4|webm|ogg)$/i, // ✅ دعم الفيديوهات
        type: 'asset/resource',
        generator: {
          filename: 'videos/[name][ext]', // تخزين الفيديو في مجلد videos
        },
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html' }),
    new HtmlWebpackPlugin({ template: './src/product_1.html', filename: 'product_1.html' }),
    new HtmlWebpackPlugin({ template: './src/product_2.html', filename: 'product_2.html' }),
    new HtmlWebpackPlugin({ template: './src/product_3.html', filename: 'product_3.html' }),
    new HtmlWebpackPlugin({ template: './src/about.html', filename: 'about.html' }),
    new HtmlWebpackPlugin({ template: './src/distributors.html', filename: 'distributors.html' }),
    new HtmlWebpackPlugin({ template: './src/contact.html', filename: 'contact.html' }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.css',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    compress: true,
    port: 9000,
    open: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  mode: 'development',
};