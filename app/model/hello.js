
const Model = require('think-js-lib').Model

class HelloModel extends Model{

    // 返回一个url
    getUrl(){
        return 'https://www.think-js.cn'
    }

}

module.exports = HelloModel