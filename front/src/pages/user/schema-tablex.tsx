import { TableProps } from "react-core-form";
import formSchema from "./schema-form";
import { remove, getList } from "./services";

export default (): TableProps => {
  return {
    rowKey: "id",
    title: "用户列表",
    scroll: {
      x: 800,
      y: "calc(100vh - 466px)",
    },
    tools: [
      {
        label: "添加用户",
        modalFormProps: formSchema,
      },
    ],
    columns: [
      {
        title: "ID",
        dataIndex: "id",
        width: 80,
      },
      {
        title: "用户名",
        dataIndex: "name",
        width: 120,
      },
      {
        title: "状态",
        dataIndex: "disabled",
        width: 120,
        render(v) {
          return [
            <span style={{ color: "#52c41a" }}>启用</span>,
            <span style={{ color: "#ff4d4f" }}>禁用</span>,
          ][v];
        },
      },
      {
        title: "创建人",
        dataIndex: "createUser",
        width: 100,
      },
      {
        title: "创建时间",
        dataIndex: "createTime",
        width: 180,
        dateFormat: "YYYY-MM-DD",
      },
      {
        title: "修改人",
        dataIndex: "updateUser",
        width: 100,
      },
      {
        title: "修改时间",
        dataIndex: "updateTime",
        width: 180,
        dateFormat: "YYYY-MM-DD",
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
            modalFormProps: ({ onRefresh }) => {
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
              const { code } = await remove(record.id);
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
          name: "name",
          label: "用户名",
        },
      ],
    },
  };
};
