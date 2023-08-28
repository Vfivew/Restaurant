const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: "development",
  entry: {
    filename: path.resolve(__dirname,"src/index.js")}, // Путь к вашему входному файлу
  output: {
    filename: '[name][contenthash].js', // Имя файла сборки
    path: path.resolve(__dirname, 'dist'), // Путь к директории для сохранения
    assetModuleFilename: "[name][ext]",
    clean:true
  },
  performance:{
    hints:false,
    maxAssetSize:512000,
    maxEntrypointSize:512000
  },
  devServer: {
    port:9000,
    compress:true,
    hot:true,
    static:{    
        directory: path.join(__dirname, "dist")
    }
  },
  module:{
    rules:[
        {
            test:/\.scss$/,
            use:["style-loader", "css-loader", "sass-loader"]
        },
        {
            test:/\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource"
        }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
        title:"My Web Page",
        filename: "index.html",
        template: "src/index.html"
    }),
     new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }
      ]
    })
  ]
};