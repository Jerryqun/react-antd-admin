import { useEffect, useRef } from "react";
import tableSchema from "./schema-table";
import { Table } from "react-core-form";

const Page = () => {
  useEffect(() => {}, []);
  const editRef = useRef({});
  return <Table {...tableSchema(editRef)} />;
};

export default Page;
