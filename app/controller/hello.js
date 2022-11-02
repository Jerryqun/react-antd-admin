
const Controller = require('think-js-lib').Controller

class HelloController extends Controller{

    // 用于演示 restful api 接口功能
    sayHello(){
        let result = [
            {
                name: '无穷369',
                title: '全栈工程师',
                blog: 'https://www.zhangyubk.com'
            }
        ]
        // 演示Model用法
        result[0]['frame'] = this.M('hello').getUrl()
        return this.showSuccess(result)
    }

}

module.exports = HelloController