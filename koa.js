/**
 * 启动本地静态服务器 npm run koa
 * */
const path = require('path');
const Koa = require('koa');
const app = new Koa();
// const route = require('koa-route');
const serve = require('koa-static');

// 1.主页静态网页 把静态页统一放到public中管理
const home = serve(path.join(__dirname) + '/dist/');

// 3.分配路由
app.use(home);
app.listen(3000);
