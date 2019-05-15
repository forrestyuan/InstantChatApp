//后台路由配置
import koa_router from 'koa-router'
import api     from  './api.js'
const routes = koa_router();

routes 
    .all('/getTips',api.getTips)
    .all('/readHistory',api.readHistory)
    .all('/getChatList',api.getChatList)
    .all('/grabPageData',api.grabPageData)

export default {
    routes
}
