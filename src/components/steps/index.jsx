import React from "react";
import { Steps } from "antd";
import "./index.scss";
import { useSelector } from "react-redux";

const { Step } = Steps;

function FormSteps({onStepChange }) {
  const order = useSelector(state => state.order);
  const curStep = useSelector(state => state.step)

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
          disabled={curStep <= 3 && !order.duration.length}
        />
      </Steps>
    </div>
  );
}

export default FormSteps;
