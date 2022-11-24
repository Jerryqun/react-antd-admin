import { Outlet, history } from "ice";
import { useRef, useState } from "react";
import { iconUrl } from "@/utils";
import customMenuDate from "./customMenu";
import { PageContainer, ProLayout } from "@ant-design/pro-layout";
import logo from "@/assets/codepen.png";

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default (props) => {
  const [pathname, setPathname] = useState(history?.location.pathname);

  const actionRef = useRef<{
    reload: () => void;
  }>();

  return (
    <div className="layout">
      <ProLayout
        title="CQ DevOps Tool"
        logo={logo}
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
