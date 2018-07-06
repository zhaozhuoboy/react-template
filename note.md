## webpack4

- 本地安装

```bash
npm i webpack webpack-cli -D
```

##  在webpack中所有文件都是模块

- js模块

## 热更新

1. 在devServer配置中打开hot选项

```js
devServer:{
        contentBase:"./build",
        port:3000,
        compress:true,//服务器压缩
        open:true,//自动打开浏览器
        hot: true,
    },
```

2. 引入 webpack.HotModuleReplacementPlugin 插件

3. 在入口文件中加入下面代码 实现热更新

```js
if(module.hot){
    module.hot.accept()
}
```

## webpack css处理

style-loader --将css模块插入style标签
css-loader --将css解析成模块
less
less-loader --解析less
stylus
stylus-loader
node-sass
sass-loader

想用啥用啥

```bash
npm i style-loader css-loader less less-loader -D
```

## 抽离样式到一个css文件中

extract-text-webpack-plugin@next    webpack 4 中要安装最新版本  不加@next   只支持 webpack3.x

mini-css-extract-plugin   webpack出的可能会替代上边那个，有点bug

- 抽离多个css文件，  css后缀的单独抽离；less后缀的单独抽离

```js
let cssExtract = new ExtractTextWebpackPlugin('css/css.css')
let lessExtract = new ExtractTextWebpackPlugin('css/less.css')
```

**_开发环境中 如果把css抽离出来 热更新会不生效_**

## 打包时删除没有用到的 css 样式

```
npm i -D purifycss-webpack purify-css glob

```

glob  包用来搜索 css的


**PurifyCssWebpack插件必须放在HtmlWebpackPlugin插件后边用**

## 使用postcss-loader为样式加前缀

```
npm i postcss-loader autoprefixer -D
```

创建  postcss.config.js 文件

```js
module.exports = {
    plugins:[
        require('autoprefixer')
    ]
}
```

## 拷贝静态资源文件插件  

```
npm i copy-webpack-plugin -D
```

