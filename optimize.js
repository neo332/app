/**
 * 优化配置
 * */
module.exports = {
    publicPath: './', // 包部署的路径
    isCSSExtract: true, // 是否把vue里的css代码提取到单独的文件里
    isMinimize: false, // 是否压缩代码
    splitCode: {
        isSplit: false, // 是否分割
        name: '' //代码块名称
    }, // 代码分割
    isPrefetch: false,
    isPreload: false,
    externals: {}
};
