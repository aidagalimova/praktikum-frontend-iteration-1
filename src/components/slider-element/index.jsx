import React from "react";
import { Button } from "antd";
import "./index.scss";

function SliderElement({ el }) {
  return (
    <div
      className="slider-element"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${el.img})`,
      }}
    >
      <div className="text-div">
        <h1 className="name medium">{el.name}</h1>
        <h3 className="discription light">{el.discription}</h3>
        <Button className={`btn btn-${el.id}`}>
          <h3 className="btn-text medium">Подбробнее </h3>
        </Button>
      </div>
    </div>
  );
}

export default SliderElement;
