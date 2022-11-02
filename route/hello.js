

const checkLogin = require('@/middleware/checkLogin.js')

module.exports = (route) => {
    // 路由配置演示
    route.get('/hello','hello/sayHello')
}