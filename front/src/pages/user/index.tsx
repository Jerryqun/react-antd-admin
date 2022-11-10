import { useEffect } from "react";
import tableSchema from "./schema-tablex";
import { Table } from "react-core-form";

const Page = (props) => {
  useEffect(() => {}, []);
  return <Table {...tableSchema()} />;
};

export async function getData() {
  const data = await fetch("https://example.com/api/xxx");
  console.log("data: ", data);
  return data;
}
export default Page;
