import React from "react";
import { Steps } from "antd";
import "./index.scss";

const { Step } = Steps;

function FormSteps({ curStep, onStepChange, order }) {
  return (
    <div>
      <Steps
        className="steps"
        type="navigation"
        size="small"
        current={curStep}
        onChange={onStepChange}
      >
        <Step
          className="step bold"
          icon={<></>}
          title="Местоположение"
          disabled={curStep <= 0}
        />
        <Step
          className="step bold"
          icon={<></>}
          title="Модель"
          disabled={curStep <= 1 && !order.point}
        />
        <Step
          className="step bold"
          icon={<></>}
          title="Дополнительно"
          disabled={curStep <= 2 && !order.selectedCar}
        />
        <Step
          className="step bold"
          icon={<></>}
          title="Итого"
          disabled={curStep <= 3 && !order.color}
        />
      </Steps>
    </div>
  );
}

export default FormSteps;
