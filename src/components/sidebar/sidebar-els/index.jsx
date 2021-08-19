import React from "react";
import { ReactComponent as FacebookIcon } from "../../../assets/svg/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/svg/instagram.svg";
import { ReactComponent as TelegramIcon } from "../../../assets/svg/telegram.svg";
import "./index.scss";

function SidebarEls() {
  return (
    <div className="sidebar-els-div">
      <h1 className="sidebar-els-text medium">ПАРКОВКА</h1>
      <h1 className="sidebar-els-text medium">СТРАХОВКА</h1>
      <h1 className="sidebar-els-text medium">БЕНЗИН</h1>
      <h1 className="sidebar-els-text medium">ОБСЛУЖИВАНИЕ</h1>
      <div className="icons-div">
        <TelegramIcon className="icon 1" fill="white" />
        <FacebookIcon className="icon 2 center" fill="white" />
        <InstagramIcon className="icon 3" fill="white" />
      </div>
    </div>
  );
}

export default SidebarEls;
