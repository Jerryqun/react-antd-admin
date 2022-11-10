import { defineConfig } from "@ice/app";
import antd from "@ice/plugin-antd";

export default defineConfig({
  ssr: false,
  ssg: false,
  define: {
    "process.env.ANTD_VERSION": false,
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
