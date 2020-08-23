// const ProgressBarPlugin = require('progress-bar-webpack-plugin'); //打包进度显示

const optimization = require('./optimize');

module.exports = {
    publicPath: optimization.publicPath,
    // 分割代码
    chainWebpack: config => {
        // 压缩代码
        config.optimization.minimize(optimization.isMinimize);
        // 分割代码
        if (optimization.splitCode.isSplit) {
            config.optimization.splitChunks({
                chunks: optimization.splitCode.name || 'all'
            });
        }
        // cdn引入资源
        config.externals(optimization.externals);

        // 预加载
        if (!optimization.isPrefetch) {
            config.plugins.delete('prefetch');
        }
        if (!optimization.isPreload) {
            config.plugins.delete('preload');
        }
        // config.plugin('html').tap(args => {
        //     args[0].hash = true;
        //     return args;
        // });
    },

    css: {
        extract: optimization.isCSSExtract,  // 提取css
        loaderOptions: {
            scss: {
                additionalData: `
                @import "~@/assets/scss/vars.scss";
                @import "~@/assets/scss/mixin.scss";
                `
            }
        }
    },
    // 插件配置
    pluginOptions: {}
};
