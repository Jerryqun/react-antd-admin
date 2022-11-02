

// 路由中间件,登录登录校验
const checkLogin = (ctx,next,error) => {
    const token = ctx.header?.authorization?.split('Bearer ')[1] || ''
    if(ctx.validateToken(token)){
        next()
    }else{
        error('非法请求,或Token过期')
    }
}

module.exports = checkLogin