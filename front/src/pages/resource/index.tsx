import { useEffect, useRef } from "react";
import tableSchema from "./schema-table";
import { Table } from "react-core-form";

const Page = () => {
  useEffect(() => {}, []);
  return <Table {...tableSchema()} />;
};

export default Page;
