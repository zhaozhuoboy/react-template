//基于node  遵循commonjs规范
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let webpack = require('webpack');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let PurifyCssWebpack = require('purifycss-webpack');//必须放在HtmlWebpackPlugin插件后边用
let glob = require('glob');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let HappyPack = require('happypack');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // entry:"./src/index.js",//入口
    entry:{
        index:"./src/index.js",
    },
    output:{
        filename:"js/[name].[hash:8].js",//打包文件加8位哈希值清缓存
        //导出路径必须是绝对路径
        path:path.resolve('./build'),
        chunkFilename:'chunk/[name].[chunkhash:8].js',
        publicPath: './',
    },
    optimization: {
        splitChunks: {
          // include all types of chunks
          chunks: 'async'
        }
    },
    module:{
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, use:'babel-loader'},
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "postcss-loader"
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "less-loader"
                        },
                        {
                            loader: "postcss-loader"
                        }
                    ]
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                use: [{
                    loader: 'file-loader?name=images/img_[hash:8].[ext]'
                }]
            }
        ]
    },//模块配置
    plugins: [//插件配置
        // new HappyPack({
        //     loaders: ['babel-loader']
        // }),
        new ExtractTextWebpackPlugin('css/index.css'),
        new CopyWebpackPlugin([
            {
                from:'./src/assets',
                to:"public"
            }
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['./build']),//打包前清空产出目录
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            title:"react+webpack4",
            favicon: "./src/favicon.ico",
            hash:true,
            minify:{//上限压缩配置
                removeAttributeQuotes:true,//删除属性的双引号
                // collapseWhitespace:true,//删除空白行
            }
        }),
        new BundleAnalyzerPlugin()
        // new PurifyCssWebpack({
        //     paths: glob.sync(path.join(__dirname, 'src/*.html'))
        // })
    ],
    mode:"production",
    resolve:{
        extensions: ['.js', '.jsx', '.json', '.less', '.css'],
        alias: {
            'src': path.resolve(__dirname, './src'),
            'components': path.resolve(__dirname, './src/app/components'),
            'page': path.resolve(__dirname, './src/app/page'),
            'util': path.resolve(__dirname, './src/util')
        }
    }//配置解析规则
}