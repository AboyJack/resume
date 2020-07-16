let path = require('path')

module.exports = {
    publicPath: './',
    outputDir: path.resolve(__dirname, './docs'),
    // assetsDir: path.resolve(__dirname, '.docs/'),// 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    indexPath: path.resolve(__dirname, './docs/index.html') // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
}