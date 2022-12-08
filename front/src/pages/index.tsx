import { history } from "ice";
import Resource from "./resource";

export default function Home() {
  history?.push("/resource");
  return <Resource />;
}
