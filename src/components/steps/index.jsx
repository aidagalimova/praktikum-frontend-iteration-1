import React, { useState } from "react";
import { Steps } from "antd";
import "./index.scss";

const { Step } = Steps;

function FormSteps() {
  const [curStep, setCurStep] = useState({ current: 0 });

  const onChange = (cur) => {
    setCurStep({ cur });
  };

  return (
    <div>
      <Steps
      className="steps"
        type="navigation"
        size="small"
        current={curStep}
        onChange={onChange}
      >
        <Step className="step" icon={<></>} title="Местоположение" />
        <Step className="step" icon={<></>} title="Модель" />
        <Step className="step" icon={<></>} title="Дополнительно" />
        <Step className="step" icon={<></>} title="Итого" />
      </Steps>
    </div>
  );
}

export default FormSteps;
