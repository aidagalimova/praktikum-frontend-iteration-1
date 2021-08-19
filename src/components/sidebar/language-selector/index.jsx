import React from "react";
import { ReactComponent as Ellipse } from "../../../assets/svg/ellipse.svg";
import "./index.scss";

function LanguageSelector() {
  return (
    <>
      <div className="language-div">
        <Ellipse className="ellipse" />
        <h2 className="language-text bold">Eng</h2>
      </div>
    </>
  );
}

export default LanguageSelector;
