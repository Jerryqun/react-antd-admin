module.exports = class extends think.Controller {
  __before() {

  }
  getParams(params) {
    const where = {};
    Object.keys(params).forEach(key => {
      if (!think.isEmpty(params[key])) {
        where[key] = params[key]
      }
    })
    return where;
  }
  // 分页查询
  async commonList(modelName) {
    const { pageSize = 10, pageNum = 1, ...params } = this.post();
    const model = this.model(modelName);
    return await model
      .where({
        ...this.getParams(params),
      })
      .order("id DESC")
      .page(pageNum, pageSize)
      .countSelect();
  }
};
