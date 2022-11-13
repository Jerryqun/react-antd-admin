import { defineConfig } from "@ice/app";
import antd from "@ice/plugin-antd";

export default defineConfig({
  ssr: false,
  ssg: false,
  proxy:{
    "/proxy": {
      "enable": true,
      "target": "http://121.4.49.147:9001/",
      "pathRewrite": {
        "^/proxy": ""
      }
    },
  },
  plugins: [
    antd({
      importStyle: true,
      theme: {
        "primary-color": "#1DA57A",
      },
    }),
  ],
});
