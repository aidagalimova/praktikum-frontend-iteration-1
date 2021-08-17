import React, { useState } from "react";
import { ReactComponent as CollapsedIcon } from "./svg/collapsed.svg";
import { ReactComponent as NotCollapsedIcon } from "./svg/not-collapsed.svg";
import "./index.scss";
import SidebarEls from "./sidebar-els";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="page">
      {!collapsed ? (
        <div className="not-collapsed">
          <NotCollapsedIcon
            className="sidebar-icon"
            onClick={toggleCollapsed}
            stroke="white"
          />
          <SidebarEls />
        </div>
      ) : (
        <div className="collapsed">
          <CollapsedIcon
            className="sidebar-icon"
            onClick={toggleCollapsed}
            stroke="white"
          />
        </div>
      )}
      <div className="language-div">
        <h2 className="language-text">Eng</h2>
      </div>
    </div>
  );
}
export default Sidebar;
