import React, { useState } from "react";
import { Layout } from "antd";
import { ReactComponent as CollapsedIcon } from "../../assets/svg/collapsed.svg";
import { ReactComponent as NotCollapsedIcon } from "../../assets/svg/not-collapsed.svg";
import "./index.scss";
import SidebarEls from "./sidebar-els";
import LanguageSelector from "./language-selector";

const { Sider } = Layout;
function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider className="sider">
      {collapsed ? (
        <div className="collapsed">
          <CollapsedIcon
            className="sidebar-icon collapsed-icon"
            onClick={toggleCollapsed}
            stroke="white"
          />
        </div>
      ) : (
        <>
          <div className="not-collapsed">
            <NotCollapsedIcon
              className="sidebar-icon"
              onClick={toggleCollapsed}
              stroke="white"
            />
            <SidebarEls />
          </div>
          <div className="background" />
        </>
      )}
      <LanguageSelector />
    </Sider>
  );
}
export default Sidebar;
