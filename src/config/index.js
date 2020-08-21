/**
 * 全局配置
 * */

const ApiEnv = {
    // 生产环境 npm run serve
    production: {
        baseURL: 'http://localhost://production'
    },
    // 开发环境  npm run dev
    development: {
        baseURL: 'http://localhost://development'
    },
    // 测试环境 npm run test
    test: {
        baseURL: 'http://localhost://test'
    }
};

export default ApiEnv[process.env.NODE_ENV];
