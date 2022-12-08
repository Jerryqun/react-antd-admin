const Base = require("./base.js");

module.exports = class extends Base {
    indexAction() {
        this.json({
            code: 200,
            data: true,
            mes: "操作成功",
        });
    }
    async loginAction() {
        if (this.method === 'POST') {
            //   获取post提交用户名和密码
            const account = this.post('account')
            const password = this.post('password')
            // 查寻数据库member表,根据用户名查询用户信息
            const user = await this.model('user')
                .where({ account: account })
                .find()

            if (think.isEmpty(user)) {
                return this.json({ msg: '用户名不存在', code: 400 })
            }

            // 判断提交的密码是否与查询到的密码一致
            if (user.password === this.verifyPassword(password)) {
                // 完成登陆-更新token
                const token = this.updateAuth(account)
                this.json({ msg: '登陆成功', token: token, code: 200 })
            } else {
                return this.json({ msg: '密码错误', code: 400 })
            }
        }
    }
    logoutAction() {
        this.updateAuth(null)
        return this.success('退出登录成功')
    }
    // 加密验证
    verifyPassword(password) {
        return think.md5(
            think.md5('ConstOwn') + think.md5(password) + think.md5('nwOtsnoC')
        )
    }

};
