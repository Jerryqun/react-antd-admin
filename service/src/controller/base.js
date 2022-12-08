/* eslint-disable quotes */
/* eslint-disable no-return-await */
const jsonwebtoken = require('jsonwebtoken')

module.exports = class extends think.Controller {
  __before() {
    this.header("Access-Control-Allow-Origin", '*');
    this.header('Access-Control-Allow-Headers', ['content-type', 'jwt-token']);

    if (this.method === "OPTIONS") {
      this.ctx.body = 200;
      return false;
    }

    if (this.ctx.originalUrl.includes('auth')) {
      return undefined
    }
    return this.checkAuth()
  }

  // 校验
  checkAuth() {
    const token = this.ctx.headers['jwt-token']
    if(!token) {
      return this.authFail({ msg: '未携带token', code: 40000 })
    }
    const { secret } = this.config('jwt')
    try {
      var tokenObj = token ? jsonwebtoken.verify(token, secret) : {}

      this.ctx.state.account = tokenObj.name

    } catch (error) {
      return this.authFail({ msg: '登录过期,请重新登陆', code: 40000 })
    }
    if (!tokenObj.name) {
      return this.authFail()
    }
    this.updateAuth(token.name)
  }
  // 更新信息
  updateAuth(userName) {
    const userInfo = {
      name: userName,
    }
    // 获取JWT的配置信息
    const { secret, cookie, expire } = this.config('jwt')
    const token = jsonwebtoken.sign(userInfo, secret, { expiresIn: expire })
    this.cookie(cookie, token)
    this.header('authorization', token)
    return token
  }
  // 校验失败
  authFail(result = {}) {
    this.json({
      code: 400,
      msg: '身份校验失败,请重新登录',
      ...result
    })
    return false
  }
  getParams(params, likeKeys) {
    const where = {};
    Object.keys(params).forEach((key) => {
      if (!think.isEmpty(params[key])) {
        where[key] = params[key];
      }
    });

    likeKeys.forEach((key) => {
      if (where[key]) {
        where[key] = ["like", `%${where[key]}%`];
      }
    });

    return where;
  }
  // 分页查询
  async commonList(modelName, likeKeys) {
    const { pageSize = 10, pageNum = 1, ...params } = this.get();
    const model = this.model(modelName);
    return await model
      .where({
        ...this.getParams(params, likeKeys),
      })
      .order("id DESC")
      .page(pageNum, pageSize)
      .countSelect();
  }
  // 物理删除
  async commonRemove(modelName) {
    const { id } = this.get();
    const model = this.model(modelName);
    return await model.where({ id }).delete();
  }
  // 通用新增
  async commonAdd(modelName) {
    const data = this.post();
    const model = this.model(modelName);
    return await model.add({
      ...data,
      create_time: ["exp", "CURRENT_TIMESTAMP()"],
      update_time: ["exp", "CURRENT_TIMESTAMP()"],
    });
  }
  // 通用更新
  async commonUpdate(modelName) {
    const data = this.post();
    const model = this.model(modelName);
    const params = {
      ...data,
      update_time: ["exp", "CURRENT_TIMESTAMP()"],
    };
    delete params.createTime;
    return await model.update(params);
  }
};
