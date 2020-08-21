const plugins = [];
if (['production', 'prod'].includes(process.env.NODE_ENV)) {
    plugins.push("transform-remove-console"); // 构建环境中去除console.log
}

module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins
}
