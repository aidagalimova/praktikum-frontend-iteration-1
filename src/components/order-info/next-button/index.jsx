import React from "react";
import { Button } from "antd";
import "./index.scss";

function NextButton({ info, btnText, onStepChange }) {
  return (
    <Button
      className={`btn ${info ? "" : "btn-disabled"}`}
      disabled={!info}
      onClick={onStepChange}
    >
      <h3 className="btn-text medium">{btnText}</h3>
    </Button>
  );
}
export default NextButton;
