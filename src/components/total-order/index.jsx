import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import "./index.scss";

function Total({ isMakePage }) {
  const order = useSelector((state) => state.order);
  if (order.selectedCar) {
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
            {isMakePage ? (
              <h3 className="discription-text light">
                {moment(order.date.start).format("DD.MM.YYYY HH:mm")}
              </h3>
            ) : (
              <h3 className="discription-text light">{order.date.start}</h3>
            )}
          </div>
        </div>
        <div className="car-img">
          <img
            className="img"
            src={
              order.selectedCar.thumbnail.path[0] === "d"
                ? order.selectedCar.thumbnail.path
                : `https://api-factory.simbirsoft1.com/${order.selectedCar.thumbnail.path}`
            }
            alt="car"
          />
        </div>
      </div>
    );
  }
  return <div>...</div>;
}

export default Total;
