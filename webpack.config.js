//基于node  遵循commonjs规范
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports = {
    // entry:"./src/index.js",//入口
    entry:{
        index:"./src/index.js",
    },
    output:{
        filename:"[name].[hash:8].js",//打包文件加8位哈希值清缓存
        //导出路径必须是绝对路径
        path:path.resolve('./build')
    },//出口
    devServer:{
        contentBase:"./build",
        port:3000,
        compress:true,//服务器压缩
        open:true,//自动打开浏览器
        hot: true,//开启热更新 要配置webpack自带的热更新插件 webpack.HotModuleReplacementPlugin
    },
    module: {//loader处理//模块配置
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    },
    plugins: [//插件配置
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html",
            title:"react+webpack4",
            hash:true
        })
    ],
    mode:"development",
    resolve:{},//配置解析规则
}