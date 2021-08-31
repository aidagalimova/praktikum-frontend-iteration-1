import React, { useState } from "react";
import { Layout } from "antd";
import { ReactComponent as CollapsedIcon } from "../../assets/svg/collapsed.svg";
import { ReactComponent as NotCollapsedIcon } from "../../assets/svg/not-collapsed.svg";
import { ReactComponent as Ellipse } from "../../assets/svg/ellipse.svg";
import "./index.scss";
import SidebarEls from "./sidebar-els";

const { Sider } = Layout;
function Sidebar({isMain}) {
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
          <div className={`background ${isMain? "": "background-not-main"}`} />
        </>
      )}
      <div className={`${collapsed ? "language-div" : "language-div formobile"} ${isMain? "" : " not-main"}`}>
        <Ellipse className="ellipse" />
        <h2 className="language-text bold">Eng</h2>
      </div>
    </Sider>
  );
}
export default Sidebar;
