import { defineConfig } from "@ice/app";
import antd from "@ice/plugin-antd";
import MonacoWebpackPlugin from "monaco-editor-webpack-plugin";

export default defineConfig({
  ssr: false,
  ssg: false,
  // proxy: {
  //   "/proxy": {
  //     enable: true,
  //     target: "http://localhost:9001/",
  //     pathRewrite: {
  //       "^/proxy": "",
  //     },
  //   },
  // },
  plugins: [
    antd({
      importStyle: true,
      theme: {
        "primary-color": "#1DA57A",
      },
    }),
  ],
  webpack: (webpackConfig, ctx) => {
    if (process.env.NODE_ENV !== "test") {
      // 添加 webpack 插件
      webpackConfig.plugins?.push(
        new MonacoWebpackPlugin({
          languages: ["javascript", "typescript", "html", "json"],
        })
      );
    }
    return webpackConfig;
  },
  dropLogLevel: "log",
  publicPath: "./",
  splitChunks: false,
});
