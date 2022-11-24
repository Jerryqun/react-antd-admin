import { DEFAULTHTML, STATICURL } from "@/utils";
import { message } from "antd";
import { DrawerFormProps, SchemaProps } from "react-core-form";
import MonacoEditor from "../../components/monaco-editor";
import { add } from "./services";

export default ({
  editRef,
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
        html: editRef.current.getValue(),
      });
      if (code === 200) {
        message.success("保存成功!");
        onSearch();
        return Promise.resolve();
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
        props: {
          addonBefore: STATICURL,
        },
      },
      {
        type: ({ value, form }) => {
          return (
            <div style={{ height: 600, width: "100%" }}>
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
        name: "html",
        label: "静态资源内容",
      },
    ] as SchemaProps[],
  };
};
