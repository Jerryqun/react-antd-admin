import React, { useEffect } from "react";
import {
  AlipayOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoOutlined,
  UserOutlined,
  WeiboOutlined,
} from "@ant-design/icons";
import {
  LoginFormPage,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { Divider, message, Space, Tabs } from "antd";
import type { CSSProperties } from "react";
import { useState } from "react";
import { login } from "./service";
import { history } from "ice";
import { setLocalStore } from "@/utils";
import store from "@/store";

type LoginType = "phone" | "account";

const iconStyles: CSSProperties = {
  color: "rgba(0, 0, 0, 0.2)",
  fontSize: "18px",
  verticalAlign: "middle",
  cursor: "pointer",
};

export default () => {
  const [loginType, setLoginType] = useState<LoginType>("account");
  const [_, userDispatchers] = store.useModel("user");
  useEffect(() => {
    userDispatchers.update({
      closeLayout: true,
    });

    return () => {
      userDispatchers.update({
        closeLayout: false,
      });
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <LoginFormPage
        onFinish={async (value) => {
          const { code, token } = await login({
            ...value,
          });

          if (code === 200) {
            setLocalStore("jwt-token", token);
            history?.replace("/resource");
          }

          return Promise.resolve();
        }}
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="CQ DevOps Tool"
        subTitle="CQ DevOps Tool"
        actions={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Divider plain>
              <span
                style={{ color: "#CCC", fontWeight: "normal", fontSize: 14 }}
              >
                ??????????????????
              </span>
            </Divider>
            <Space align="center" size={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: "1px solid #D4D8DD",
                  borderRadius: "50%",
                }}
              >
                <AlipayOutlined style={{ ...iconStyles, color: "#1677FF" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: "1px solid #D4D8DD",
                  borderRadius: "50%",
                }}
              >
                <TaobaoOutlined style={{ ...iconStyles, color: "#FF6A10" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: "1px solid #D4D8DD",
                  borderRadius: "50%",
                }}
              >
                <WeiboOutlined style={{ ...iconStyles, color: "#333333" }} />
              </div>
            </Space>
          </div>
        }
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        >
          <Tabs.TabPane key={"account"} tab={"??????????????????"} />
          <Tabs.TabPane key={"phone"} tab={"???????????????"} />
        </Tabs>
        {loginType === "account" && (
          <>
            <ProFormText
              name="account"
              fieldProps={{
                size: "large",
                prefix: <UserOutlined className={"prefixIcon"} />,
              }}
              placeholder={"?????????: admin or user"}
              rules={[
                {
                  required: true,
                  message: "??????????????????!",
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined className={"prefixIcon"} />,
              }}
              placeholder={"??????: ant.design"}
              rules={[
                {
                  required: true,
                  message: "??????????????????",
                },
              ]}
            />
          </>
        )}
        {loginType === "phone" && (
          <>
            <ProFormText
              fieldProps={{
                size: "large",
                prefix: <MobileOutlined className={"prefixIcon"} />,
              }}
              name="mobile"
              placeholder={"?????????"}
              rules={[
                {
                  required: true,
                  message: "?????????????????????",
                },
                {
                  pattern: /^1\d{10}$/,
                  message: "????????????????????????",
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: "large",
                prefix: <LockOutlined className={"prefixIcon"} />,
              }}
              captchaProps={{
                size: "large",
              }}
              placeholder={"??????????????????"}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${"???????????????"}`;
                }
                return "???????????????";
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: "?????????????????????",
                },
              ]}
              onGetCaptcha={async () => {
                message.success("???????????????????????????????????????1234");
              }}
            />
          </>
        )}
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            ????????????
          </ProFormCheckbox>
          <a
            style={{
              float: "right",
            }}
          >
            ????????????
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};
