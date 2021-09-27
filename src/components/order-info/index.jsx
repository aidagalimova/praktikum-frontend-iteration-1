import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Button } from "antd";
import LocationInfo from "./location-info";
import CarModelInfo from "./car-model-info";
import AdditionsInfo from "./additions-info";
import PriceInfo from "./price-info";
import NextButton from "./next-button";
import "./index.scss";
import { totalPriceSet } from "../../store/actions/order-info";
import { cancelOrder } from "../../services/order";

function OrderInfo({ onStepChange, isMakeOrder }) {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.order);
  const curStep = useSelector((state) => state.step);
  useEffect(() => {
    if (isMakeOrder) {
      if (info.tariff && info.date.start && info.date.end) {
        const tariff = JSON.parse(info.tariff);
        let dur = moment.duration(
          info.date.end.diff(info.date.start.startOf("hour"))
        );
        let servicesPrice = 0;
        switch (tariff.rateTypeId.unit) {
          case "мин":
            dur = dur.asMinutes();
            break;
          case "сутки":
            dur = Math.ceil(dur.asDays());
            break;
          case "7 дней":
            dur = Math.ceil(dur.asWeeks());
            break;
          case "30 дней":
            dur = Math.ceil(dur.asMonths());
            break;
          default:
            dur = 0;
        }
        if (info.services) {
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < info.services.length; i++) {
            servicesPrice += parseInt(info.services[i].split(",")[1], 10);
          }
        }
        dispatch(
          totalPriceSet(info.priceMin + dur * tariff.price + servicesPrice)
        );
      } else dispatch(totalPriceSet(0));
    }
  }, [info.tariff, info.date, info.services]);

  return (
    <div className="info-div">
      <h2 className="title medium">Ваш заказ:</h2>
      <LocationInfo info={info} />
      <CarModelInfo />
      <AdditionsInfo info={info} curStep={curStep} />
      <PriceInfo />
      {isMakeOrder ? (
        <>
          {curStep === 0 && (
            <NextButton
              btnText="Выбрать модель"
              info={info.point}
              onStepChange={() => {
                onStepChange(1);
              }}
            />
          )}
          {curStep === 1 && (
            <NextButton
              btnText="Дополнительно"
              info={info.selectedCar}
              onStepChange={() => {
                onStepChange(2);
              }}
            />
          )}
          {curStep === 2 && (
            <NextButton
              btnText="Итого"
              info={info.duration.length !== 0 && info.tariff && info.color}
              onStepChange={() => {
                onStepChange(3);
              }}
            />
          )}
          {(curStep === 3 || curStep === 4) && (
            <>
              <NextButton
                btnText="Заказать"
                info={info.point}
                onStepChange={() => {
                  onStepChange(4);
                }}
              />
            </>
          )}
        </>
      ) : (
        <>
          {info.orderStatusId && info.orderStatusId.name !== "Отмененые" && (
            <Button className="btn cancel " onClick={() => cancelOrder(info)}>
              <h3 className="btn-text">Отменить</h3>
            </Button>
          )}
        </>
      )}
    </div>
  );
}
export default OrderInfo;
