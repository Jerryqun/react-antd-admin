/* eslint-disable quotes */
const Base = require("./base.js");

module.exports = class extends Base {
  async getHtmlAction() {
    const { path_name } = this.get();
    const exit = await this.model("app_resource")
      .where({
        path_name,
      })
      .find();
    this.json({
      code: 200,
      data:exit,
      mes: "操作成功",
    });
  }
  async listAction() {
    const data = await this.commonList("app_resource", ["app_name"]);
    this.json({
      code: 200,
      data,
      mes: "操作成功",
    });
  }

  async delAction() {
    const data = await this.commonRemove("app_resource");
    this.json({
      code: 200,
      data,
      mes: "操作成功",
    });
  }

  async addAction() {
    const { path_name, id } = this.post();
    if (id) {
      await this.commonUpdate("app_resource");
      this.json({
        code: 200,
        data: id,
      });
      return;
    }
    const exit = await this.model("app_resource")
      .where({
        path_name,
      })
      .find();
    if (think.isEmpty(exit)) {
      const insertId = await this.commonAdd("app_resource");
      this.json({
        code: 200,
        data: insertId,
      });
    } else {
      this.json({
        code: 400,
        msg: "资源路径已暂用",
      });
    }
  }
};
