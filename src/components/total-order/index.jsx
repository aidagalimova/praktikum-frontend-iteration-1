import React from "react";
import img1 from "../../assets/image/car 1.png";
import "./index.scss";

const car = {
  name: "Hyndai, i30 N",
  number: "K 761 HA 73",
  fuel: "100%",
  availableDate: "12.06.2019 12:00",
  img: img1,
};
function Total() {
  return (
    <div className="car">
      <div className="car-text">
        <h3 className="car-name regular">{car.name}</h3>
        <div className="car-number regular">
          <h3 className="car-number-text regular">{car.number}</h3>
        </div>
        <div className="discription">
          <h3 className="discription-text bold">Топливо&nbsp;</h3>
          <h3 className="discription-text light">{car.fuel}</h3>
        </div>
        <div className="discription">
          <h3 className="discription-text bold ">Доступна с &nbsp;</h3>
          <h3 className="discription-text light">{car.availableDate}</h3>
        </div>
      </div>
      <div className="car-img">
        <img className="img" src={car.img} alt="car" />
      </div>
    </div>
  );
}

export default Total;
