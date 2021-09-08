import React from "react";
import { connect } from "react-redux";
import { Steps } from "antd";
import "./index.scss";

const { Step } = Steps;
const mapStateToProps = (state) => ({
  order: state.order,
  curStep: state.step,
});

function FormSteps({ curStep, order, onStepChange }) {
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
          disabled={curStep <= 3 && order.date.length !== 2}
        />
      </Steps>
    </div>
  );
}

export default connect(mapStateToProps)(FormSteps);
