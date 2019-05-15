import Koa from 'koa'; //middleware which is web frame base on nodeJS
import koa_router from "koa-router"; //middleware help website to route to direct page
import json from 'koa-json'; //middleware of response json pretty-printed
import logger from 'koa-logger'; //middleware to print the request log in the terminal
import path from 'path';
import serve from 'koa-static';
const historyApiFallback = require('koa2-history-api-fallback')
import koa_bodyparser from "koa-bodyparser";
import routes_obj from './server/routes.js';
const fs = require('fs');
const app = new Koa();
const router = koa_router();

app.use(koa_bodyparser({
    formLimit: '150mb'
}));
app.use(json());
app.use(logger());
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
});
app.on('error', (err, ctx) => {
    ctx.body = {
        success: false,
        data: ctx,
        message: err
    };
    console.log('server error', err);
});
router.use('/api', routes_obj.routes.routes());
app.use(router.routes()); // 将路由规则挂载到Koa上。
app.use(historyApiFallback());
app.use(serve(path.resolve('dist'))); // 将webpack打包好的项目目录作为Koa静态文件服务的目录
//启动服务器
const port = process.env.PORT || 3001;
const host = process.env.IP || '127.0.0.1';
let server = app.listen(port, host, () => {
    console.log(`Koa is listening in http://${host}:${port}`);
});
//配置聊天 功能服务
let io = require('socket.io')(server);
io.on('connection', socket => {
    
    socket.on('chat message', (msg) => {
        try {
            fs.appendFile('./history.txt', `${msg}(**foxchat**)`, 'utf8', e => {
                console.error(e)
            });
            io.emit('chat message', msg);
        } catch (e) {
            console.log(e);
        }
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});


export default app;