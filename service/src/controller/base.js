/* eslint-disable quotes */
/* eslint-disable no-return-await */
module.exports = class extends think.Controller {
  __before() {}
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
