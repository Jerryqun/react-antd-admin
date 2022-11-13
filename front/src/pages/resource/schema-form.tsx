import { message } from "antd";
import { ModalFormProps, SchemaProps } from "react-core-form";
import  MonacoEditor  from '../../components/monaco-editor';
import { add } from "./services";

export default ({
  onSearch,
  editRef,
  initialValues = {
    id: undefined,
    disabled: 0,
    password: "123456",
  },
}): ModalFormProps => {

  return {
    title: initialValues.id ? "修改" : "新增",
    width: 600,
    modalProps: {
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
      },
      {
        type: ({  value }) => {
          return (
            <div style={{ height: 600, width: '100%' }}>
              <MonacoEditor
                id="app-static"
                value={value}
                editorMonacoRef={editRef}
                language="html"
                options={{
                  tabSize: 2,
                  minimap: {
                    enabled: false,
                  },
                }}
              />
            </div>
          );
        },
        name: 'html',
        required: true,
        label: '静态资源内容',
      },
    ] as SchemaProps[],
  };
};
