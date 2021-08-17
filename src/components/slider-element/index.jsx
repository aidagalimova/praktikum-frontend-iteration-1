import React from "react";
import { Row, Col } from "antd";
import { ReactComponent as RightArrow } from "./svg/right.svg";
import { ReactComponent as LeftArrow } from "./svg/left.svg";
import "./index.scss";

function SliderElement({ el }) {
  return (
    <div
      className="slider-element"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(/img/sliderImg${el.id}.png)`,
      }}
    >
      <Row>
        <Col span={1}>
          <LeftArrow className="left-arrow" />
        </Col>
        <Col span={22}>
          <div className="text-div">
            <h1 className="name">{el.name}</h1>
            <h3 className="discription">{el.discription}</h3>
          </div>
        </Col>
        <Col span={1}>
          <RightArrow className="right-arrow" />
        </Col>
      </Row>
    </div>
  );
}

export default SliderElement;
