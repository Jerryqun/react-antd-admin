import { TableProps } from "react-core-form";
import formSchema from "./schema-form";
import { getList, del } from "./services";
import { STATICURL } from "@/utils";

export default (): TableProps => {
  return {
    rowKey: "id",
    title: "资源列表",
    scroll: { x: 1000 },
    tools: [
      {
        label: "添加应用",
        drawerFormProps: ({ onSearch }) => formSchema({ onSearch }),
      },
    ],
    columns: [
      {
        title: "资源名称",
        dataIndex: "app_name",
        width: 120,
      },
      {
        title: "资源访问地址",
        dataIndex: "path_name",
        width: 180,
        copyable: {
          text: (v: any, record: any, index: any) =>
            `${STATICURL}${record.path_name}`,
        },
        render: (text: string) => (
          <a target="_blank" href={`${STATICURL}${text}`}>
            {`${STATICURL}${text}`}
          </a>
        ),
      },
      {
        title: "创建时间",
        dataIndex: "create_time",
        width: 120,
        dateFormat: "YYYY-MM-DD HH:mm:ss",
      },
      {
        title: "修改时间",
        dataIndex: "update_time",
        width: 120,
        dateFormat: "YYYY-MM-DD HH:mm:ss",
      },
    ],
    request: async (params) => {
      const {
        code,
        data: { data, count },
      } = await getList(params);

      return {
        total: count,
        success: code === 200,
        list: data,
      };
    },
    rowOperations: {
      width: 100,
      showMore: 5,
      title: "操作",
      fixed: "right",
      menus: (record) => {
        return [
          {
            label: "修改",
            disabled: record.system === 1,
            drawerFormProps: ({ onRefresh }) => {
              return formSchema({
                onSearch: onRefresh,
                initialValues: record,
              });
            },
          },
          {
            label: "删除",
            spin: true,
            disabled: record.system === 1,
            async onClick({ onSearch }) {
              const { code } = await del({ id: record.id });
              if (code === 200) {
                onSearch();
              }
            },
            confirm: {
              title: "提示",
              content: "是否确认删除?",
            },
          },
        ];
      },
    },
    searchSchema: {
      column: 4,
      schema: [
        {
          type: "Input",
          name: "app_name",
          label: "资源名称",
          props:{
            showCount:false
          }
        },
      ],
    },
  };
};
