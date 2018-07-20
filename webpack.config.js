//基于node  遵循commonjs规范
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let config = require('./config')

module.exports = {
    devtool: "cheap-source-map",
    performance: {
        hints: false, // 性能提示[warning,error,false],
    },
    entry: {
        index: [
            "webpack-dev-server/client?http://localhost:3000/",
            "./src/index.js"
        ]
    },
    output: {
        filename: "[name].[hash:8].js", //打包文件加8位哈希值清缓存
        //导出路径必须是绝对路径
        path: path.resolve('./build'),
        publicPath: ''
    }, //出口
    devServer: {
        contentBase: "./build",
        publicPath: '',
        port: 3000,
        inline: true,
        compress: true, //服务器压缩
        open: true, //自动打开浏览器
        hot: true, //开启热更新 要配置webpack自带的热更新插件 webpack.HotModuleReplacementPlugin
        proxy: {
            '/api': 'http://localhost:4000'
        }
    },
    module: { //loader处理//模块配置
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, './src'),
            loader: "babel-loader"
        },
        {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            },
            {
                loader: "css-loader"
            }
            ]
        },
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            },
            {
                loader: "css-loader"
            },
            {
                loader: "less-loader"
            }
            ]
        },
        {
            test: /\.(jpe?g|png|gif|svg|ico)$/,
            use: [{
                loader: 'file-loader?name=images/img_[hash:8].[ext]'
            }]
        }
        ]
    },
    plugins: [ //插件配置
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            title: "react+webpack4",
            hash: true
        })
    ],
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.less', '.css'],
        alias: {
            'src': path.resolve(__dirname, './src'),
            'components': path.resolve(__dirname, './src/app/components'),
            'page': path.resolve(__dirname, './src/app/page'),
            'util': path.resolve(__dirname, './src/util')
        }
    }//配置解析规则
}