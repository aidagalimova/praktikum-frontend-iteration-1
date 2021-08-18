import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { ReactComponent as CollapsedIcon } from "./svg/collapsed.svg";
import { ReactComponent as NotCollapsedIcon } from "./svg/not-collapsed.svg";
import "./index.scss";
import SidebarEls from "./sidebar-els";

const { Sider } = Layout;
function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  useEffect(() => {
    if (document.getElementsByClassName("background").length !== 0) {
      document.getElementsByClassName(
        "background"
      )[0].style.width = `${window.innerWidth}px`;
    }
  });
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
      <div className="language-div">
        <h2 className="language-text">Eng</h2>
      </div>
    </Sider>
  );
}
export default Sidebar;
