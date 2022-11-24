import { history } from "ice";

export default function Home() {
  history?.push("/resource");
  return <div>home</div>;
}
