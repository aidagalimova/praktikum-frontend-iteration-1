import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import "./index.scss";

function Total() {
  const order = useSelector((state) => state.order);
  return (
    <div className="car">
      <div className="car-text">
        <h3 className="car-name regular">{order.selectedCar.name}</h3>
        <div className="car-number regular">
          <h3 className="car-number-text regular">
            {order.selectedCar.number}
          </h3>
        </div>
        <div className="discription">
          {order.selectedCar.tank !== undefined && (
            <>
              <h3 className="discription-text bold">Топливо&nbsp;</h3>
              <h3 className="discription-text light">
                {order.selectedCar.tank}%
              </h3>
            </>
          )}
        </div>
        <div className="discription">
          <h3 className="discription-text bold ">Доступна с &nbsp;</h3>
          <h3 className="discription-text light">
            {moment(order.date.start).format("DD.MM.YYYY HH:mm")}
          </h3>
        </div>
      </div>
      <div className="car-img">
        <img
          className="img"
          src={
            order.selectedCar.img.path[0] === "d"
              ? order.selectedCar.img.path
              : `https://api-factory.simbirsoft1.com/${order.selectedCar.img.path}`
          }
          alt="car"
        />
      </div>
    </div>
  );
}

export default Total;
