const path = require('path'); // وحدة Node.js للتعامل مع مسارات الملفات
const HtmlWebpackPlugin = require('html-webpack-plugin'); // إضافة لإنشاء ملف HTML تلقائيًا
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // إضافة لاستخراج CSS في ملفات منفصلة
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // إضافة لتنظيف مجلد الإخراج قبل كل عملية بناء

module.exports = {
  entry: './src/js/index.js', // نقطة الدخول الرئيسية للتطبيق
  output: {
    filename: 'bundle.js', // اسم ملف الإخراج لملف JavaScript المجمع
    path: path.resolve(__dirname, 'dist'), // المسار المطلق لمجلد الإخراج
    clean: true, // تنظيف المجلد قبل البناء لتجنب الملفات القديمة
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // استهداف ملفات CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // استخراج وتحميل ملفات CSS
      },
      {
        test: /.(scss|sass)$/i, // استهداف ملفات SCSS و SASS
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // معالجة SCSS/SASS وتحويله إلى CSS
      },
      {
        test: /.(png|jpe?g|gif|svg)$/i, // استهداف صيغ ملفات الصور
        type: 'asset/resource', // التعامل مع الصور كمصادر مستقلة
        exclude: /.(woff|woff2|eot|ttf|otf)$/i, // استثناء ملفات الخطوط من هذه القاعدة
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i, // استهداف ملفات الخطوط
        type: 'asset/resource', // التعامل مع الخطوط كمصادر مستقلة
        generator: {
          filename: 'fonts/[name][ext]', // حفظ الخطوط داخل مجلد "fonts" بنفس الاسم الأصلي
        },
        exclude: /.(png|jpe?g|gif|svg)$/i, // استثناء ملفات الصور من هذه القاعدة
      },
      {
        test: /.html$/i, // استهداف ملفات HTML
        use: ['html-loader'], // معالجة HTML للتعامل مع الملفات المرتبطة مثل الصور
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // تنظيف مجلد الإخراج قبل كل عملية بناء
    new HtmlWebpackPlugin({
      template: './src/index.html', 
      filename: 'index.html', 
    }),
    new HtmlWebpackPlugin({
      template: './src/product_1.html', 
      filename: 'product_1.html', 
    }),
    new HtmlWebpackPlugin({
      template: './src/product_2.html', 
      filename: 'product_2.html', 
    }),
    new HtmlWebpackPlugin({
      template: './src/product_3.html', 
      filename: 'product_3.html', 
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html', 
      filename: 'about.html', 
    }),
    new HtmlWebpackPlugin({
      template: './src/distributors.html', 
      filename: 'distributors.html', 
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html', 
      filename: 'contact.html', 
    }),
    new MiniCssExtractPlugin({ 
      filename: 'styles.css', 
      chunkFilename: 'styles.css', // يمنع إنشاء ملفات مجزأة
    }), // استخراج CSS إلى ملف منفصل
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // جعل `dist` مجلد الملفات الثابتة
    },
    devMiddleware: {
      writeToDisk: true, // يجبر Webpack على كتابة الملفات في `dist` أثناء التطوير
    },
    compress: true, // تمكين الضغط باستخدام gzip لتحسين الأداء
    port: 9000, // تحديد منفذ خادم التطوير
    open: true, // فتح المتصفح تلقائيًا عند تشغيل الخادم
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
  mode: 'development', // تعيين الوضع إلى "التطوير" لتحسين تجربة التصحيح
};
