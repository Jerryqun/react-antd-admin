import { message } from "antd";
import { ModalFormProps, SchemaProps } from "react-core-form";
import { add, update } from "./services";

export default ({
  onSearch,
  initialValues = {
    id: undefined,
    disabled: 0,
    password: "123456",
  },
}): ModalFormProps => {
  return {
    title: initialValues.id ? "修改用户" : "添加用户",
    width: 600,
    modalProps: {
      bodyStyle: {
        height: 280,
        overflow: "auto",
      },
    },
    async onSubmit(values) {
      const server = values.id ? update : add;
      const { code } = await server({
        ...values,
      });
      if (code === 200) {
        message.success("保存成功!");
        onSearch();
      } else {
        return Promise.reject();
      }
      return true;
    },
    initialValues,
    schema: [
      {
        type: "Input",
        name: "id",
        hidden: true,
      },
      {
        type: "Password",
        name: "password",
        label: "初始密码",
        hidden: initialValues.id !== undefined,
      },
      {
        type: "Input",
        name: "name",
        label: "用户名称",
        required: true,
      },
      {
        type: "RadioGroup",
        name: "disabled",
        label: "用户状态",
        props: {
          options: [
            {
              label: "启用",
              value: 0,
            },
            {
              label: "禁用",
              value: 1,
            },
          ],
        },
      },
    ] as SchemaProps[],
  };
};
