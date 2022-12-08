import React from "react";
import { Outlet, history } from "ice";
import { useRef, useState } from "react";
import { getJWTToken, iconUrl, unsetLocalStore } from "@/utils";
import customMenuDate from "./customMenu";
import { PageContainer, ProLayout } from "@ant-design/pro-layout";
import store from "@/store";
import {
  InfoCircleFilled,
  LogoutOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { Popconfirm } from "antd";

export default () => {
  const [pathname, setPathname] = useState(history?.location.pathname || "");
  const [userState] = store.useModel("user");

  const actionRef = useRef<{
    reload: () => void;
  }>();

  if (userState.closeLayout) return <Outlet />;

  return (
    <div className="layout">
      <ProLayout
        avatarProps={{
          src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
          size: "small",
          title: "七妮妮",
        }}
        actionsRender={(props) => {
          return [
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <Popconfirm
              title="Are you sure to sign out?"
              onConfirm={() => {
                unsetLocalStore("jwt-token");
                history?.replace("/login");
              }}
              okText="Yes"
              cancelText="No"
            >
              <LogoutOutlined />
            </Popconfirm>,
          ];
        }}
        title="CQ DevOps Tool"
        logo="https://img.alicdn.com/imgextra/i1/O1CN01PliDAM1qKyRSgmSyR_!!6000000005478-2-tps-200-200.png"
        actionRef={actionRef}
        iconfontUrl={iconUrl}
        menu={{
          request: async () => {
            return customMenuDate;
          },
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              history?.push(item.path || "/");
              setPathname(item.path || "/");
            }}
          >
            {dom}
          </div>
        )}
        location={{
          pathname,
        }}
      >
        <PageContainer fixedHeader>
          <Outlet />
        </PageContainer>
      </ProLayout>
    </div>
  );
};
