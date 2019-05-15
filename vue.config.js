// vue.config.js
const path = require('path');
module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    devServer: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3001',
                changeOrigin: true,
                ws:true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            // '/': {
            //     target: 'http://127.0.0.1:3001',
            //     changeOrigin: true,
            // }
        },
        open: true,
        // hot: true,
        // hotOnly: true,
        // contentBase:path.join(__dirname, 'public'),
        // historyApiFallback: true
    },
}