const Base = require("./base.js");

module.exports = class extends Base {
  async listAction() {
    const data = await this.commonList("app_resource");
    this.json({
      code: 200,
      data,
      mes:'操作成功'
    });
  }
};
