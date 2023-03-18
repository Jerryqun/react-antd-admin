import { DEFAULTHTML, STATICURL } from "@/utils";
import { message } from "antd";
import { DrawerFormProps, SchemaProps } from "react-core-form";
import { add } from "./services";

export default ({
  onSearch,
  initialValues = {
    id: undefined,
    html: DEFAULTHTML,
  },
}): DrawerFormProps => {
  return {
    title: initialValues.id ? "修改" : "新增",
    width: 700,
    drawerProps: {
      bodyStyle: {
        height: 280,
        overflow: "auto",
      },
    },
    async onSubmit(values) {
      const { code } = await add({
        ...values,
      });
      if (code === 200) {
        message.success("保存成功!");
        onSearch();
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    },
    initialValues,
    schema: [
      {
        type: "Input",
        name: "id",
        hidden: true,
      },
      {
        type: "Input",
        name: "app_name",
        label: "名称",
        required: true,
      },
      {
        type: "Input",
        name: "path_name",
        label: "资源访问地址",
        required: true,
        props: {
          addonBefore: STATICURL,
        },
      },
      {
        type: 'CodeEditor',
        label: '部署资源内容',
        name: 'html',
        props: {
          style: { height: 400 },
          language: 'html',
          theme: 'vs-dark',
        },
      },
    ] as SchemaProps[],
  };
};
