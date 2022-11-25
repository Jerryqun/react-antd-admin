var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// .ice/env.server.ts
process.env.ICE_CORE_MODE = "production";
process.env.ICE_CORE_ROUTER = "true";
process.env.ICE_CORE_ERROR_BOUNDARY = "false";
process.env.ICE_CORE_INITIAL_DATA = "true";
process.env.ICE_CORE_DEV_PORT = "undefined";

// .ice/entry.server.ts
import * as runtime from "@ice/runtime/server";

// .ice/runtimeModules.ts
var statics = [];
var commons = [];

// src/app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => app_default
});

// .ice/index.ts
import { Link, Outlet, useParams, useSearchParams, useLocation, useNavigate } from "@ice/runtime/router";
import { defineAppConfig, useAppData, useData, useConfig, Meta, Title, Links, Scripts, Data, Main, history, KeepAliveOutlet, useMounted, ClientOnly } from "@ice/runtime";

// src/app.tsx
var app_default = defineAppConfig({
  router: {
    type: "hash"
  }
});

// src/document.tsx
import { jsx as _jsx, jsxs as _jsxs } from "@ice/runtime/jsx-runtime";
function Document() {
  return /* @__PURE__ */ _jsxs("html", {
    children: [
      /* @__PURE__ */ _jsxs("head", {
        children: [
          /* @__PURE__ */ _jsx("meta", {
            charSet: "utf-8"
          }),
          /* @__PURE__ */ _jsx("meta", {
            name: "description",
            content: "ICE 3 Project"
          }),
          /* @__PURE__ */ _jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          }),
          /* @__PURE__ */ _jsx("link", {
            rel: "icon",
            href: "https://img.alicdn.com/imgextra/i1/O1CN01PliDAM1qKyRSgmSyR_!!6000000005478-2-tps-200-200.png"
          }),
          /* @__PURE__ */ _jsx(Meta, {}),
          /* @__PURE__ */ _jsx(Title, {}),
          /* @__PURE__ */ _jsx(Links, {})
        ]
      }),
      /* @__PURE__ */ _jsxs("body", {
        children: [
          /* @__PURE__ */ _jsx(Main, {}),
          /* @__PURE__ */ _jsx(Scripts, {})
        ]
      })
    ]
  });
}

// asset-manifest:virtual:assets-manifest.json
var virtual_assets_manifest_default = { publicPath: "./", entries: { main: ["css/main.css", "js/main.js"] }, pages: { layout: ["css/layout.css", "js/layout.js"], "resource-schema-table": ["css/resource-schema-table.css", "js/resource-schema-table.js"], "resource-schema-form": ["css/resource-schema-form.css", "js/resource-schema-form.js"], "resource-services": ["css/resource-services.css", "js/resource-services.js"], "resource-index": ["css/resource-index.css", "js/resource-index.js"], "welcome-index": ["js/welcome-index.js"], custommenu: ["js/custommenu.js"], index: ["js/index.js"] }, assets: { "node_modules/_monaco-editor@0.34.1@monaco-editor/esm/vs/base/browser/ui/codicons/codicon/codicon.ttf": "e5e47fee", "src/assets/codepen.png": "0fe60e9c" } };

// .ice/routes.ts
var routes_default = [
  {
    path: "",
    load: () => import(
      /* webpackChunkName: "layout" */
      "./layout-CUYLC4ZT.mjs"
    ),
    componentName: "layout",
    index: void 0,
    id: "layout",
    exact: true,
    exports: [
      "default"
    ],
    layout: true,
    children: [
      {
        path: "resource/schema-table",
        load: () => import(
          /* webpackChunkName: "resource-schema-table" */
          "./schema-table-DQRANWBS.mjs"
        ),
        componentName: "resource-schema-table",
        index: void 0,
        id: "resource/schema-table",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "resource/schema-form",
        load: () => import(
          /* webpackChunkName: "resource-schema-form" */
          "./schema-form-BRGJPA52.mjs"
        ),
        componentName: "resource-schema-form",
        index: void 0,
        id: "resource/schema-form",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "resource/services",
        load: () => import(
          /* webpackChunkName: "resource-services" */
          "./services-LM3EC7UQ.mjs"
        ),
        componentName: "resource-services",
        index: void 0,
        id: "resource/services",
        exact: true,
        exports: [
          "add",
          "del",
          "getList"
        ]
      },
      {
        path: "resource",
        load: () => import(
          /* webpackChunkName: "resource-index" */
          "./resource-O5JXK3SH.mjs"
        ),
        componentName: "resource-index",
        index: true,
        id: "resource/index",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "welcome",
        load: () => import(
          /* webpackChunkName: "welcome-index" */
          "./welcome-6HTGE3RD.mjs"
        ),
        componentName: "welcome-index",
        index: true,
        id: "welcome/index",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "customMenu",
        load: () => import(
          /* webpackChunkName: "custommenu" */
          "./customMenu-S3TILYFX.mjs"
        ),
        componentName: "custommenu",
        index: void 0,
        id: "customMenu",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "",
        load: () => import(
          /* webpackChunkName: "index" */
          "./pages-XL7S3TJ6.mjs"
        ),
        componentName: "index",
        index: true,
        id: "index",
        exact: true,
        exports: [
          "default"
        ]
      }
    ]
  }
];

// .ice/routes-config.bundle.mjs
var routes_config_default = {};

// .ice/entry.server.ts
var runtimeModules = {
  commons,
  statics
};
var getRouterBasename = () => {
  var _a, _b, _c;
  const appConfig = runtime.getAppConfig(app_exports);
  return (_c = (_b = (_a = appConfig == null ? void 0 : appConfig.router) == null ? void 0 : _a.basename) != null ? _b : "/") != null ? _c : "";
};
var setRuntimeEnv = (renderMode) => {
  if (renderMode === "SSG") {
    process.env.ICE_CORE_SSG = "true";
  } else {
    process.env.ICE_CORE_SSR = "true";
  }
};
async function renderToHTML2(requestContext, options = {}) {
  const { documentOnly, renderMode = "SSR", basename, serverOnlyBasename, routePath, disableFallback } = options;
  setRuntimeEnv(renderMode);
  return await runtime.renderToHTML(requestContext, {
    app: app_exports,
    assetsManifest: virtual_assets_manifest_default,
    routes: routes_default,
    runtimeModules,
    Document,
    serverOnlyBasename,
    basename: basename || getRouterBasename(),
    documentOnly,
    renderMode,
    routePath,
    disableFallback,
    routesConfig: routes_config_default
  });
}
async function renderToResponse2(requestContext, options = {}) {
  const { documentOnly, renderMode = "SSR", basename, serverOnlyBasename, disableFallback } = options;
  setRuntimeEnv(options);
  runtime.renderToResponse(requestContext, {
    app: app_exports,
    assetsManifest: virtual_assets_manifest_default,
    routes: routes_default,
    runtimeModules,
    Document,
    serverOnlyBasename,
    basename: basename || getRouterBasename(),
    documentOnly,
    renderMode,
    disableFallback,
    routesConfig: routes_config_default
  });
}
export {
  renderToHTML2 as renderToHTML,
  renderToResponse2 as renderToResponse
};
