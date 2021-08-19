import React from "react";
import { Row, Col, Button } from "antd";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import "./index.scss";

function SliderElement({ el }) {
  return (
    <div
      className="slider-element"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${el.img})`,
      }}
    >
      <Row>
        <Col span={1}>
          <Arrow className="left-arrow" />
        </Col>
        <Col span={22}>
          <div className="text-div">
            <h1 className="name medium">{el.name}</h1>
            <h3 className="discription light">{el.discription}</h3>
            <Button className={`btn btn-${el.id}`}>
              <h3 className="btn-text medium">Подбробнее </h3>
            </Button>
          </div>
        </Col>
        <Col span={1}>
          <Arrow
            className="right-arrow"
            transform="scale(-1, 1) translate(-10, 0)"
          />
        </Col>
      </Row>
    </div>
  );
}

export default SliderElement;
