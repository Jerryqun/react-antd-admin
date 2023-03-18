import { Meta, Title, Links, Main, Scripts } from "ice";

export default function Document() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="ICE 3 Project" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link
          rel="icon"
          href="https://img.alicdn.com/imgextra/i1/O1CN01PliDAM1qKyRSgmSyR_!!6000000005478-2-tps-200-200.png"
        />
        <Meta />
        <Title />
        <Links/>
        <link  href='https://cdn.bootcdn.net/ajax/libs/monaco-editor/0.36.1/min/vs/editor/editor.main.min.css'/>
      </head>
      <body>
        <Main />
        <Scripts/>
        <script  src='https://cdn.bootcdn.net/ajax/libs/monaco-editor/0.36.1/min/vs/loader.min.js'></script>
      </body>
    </html>
  );
}
