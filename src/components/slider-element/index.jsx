import React from "react";
import { Button } from "antd";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import "./index.scss";

function SliderElement({ el, next, prev }) {
  return (
    <div
      className="slider-element"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${el.img})`,
      }}
    >
      <div className="arrow" onClick={prev} aria-hidden="true">
        <Arrow className="arrow-icon" />
      </div>
      <div className="text-div">
        <h1 className="name medium">{el.name}</h1>
        <h3 className="discription light">{el.discription}</h3>
        <Button className={`btn btn-${el.id}`}>
          <h3 className="btn-text medium">Подбробнее </h3>
        </Button>
      </div>
      <div className="arrow" onClick={next} aria-hidden="true">
        <Arrow className="arrow-icon" transform="scale(-1, 1)" />
      </div>
    </div>
  );
}

export default SliderElement;
