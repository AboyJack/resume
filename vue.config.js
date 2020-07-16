let path = require('path')

module.exports = {
    indexPath: path.resolve(__dirname, './docs/index.html'), // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    outputDir: path.resolve(__dirname, './docs')
}