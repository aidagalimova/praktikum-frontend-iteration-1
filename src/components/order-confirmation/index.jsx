import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import sendOrder from "../../services/order";
import "./index.scss";

function OrderConfirmation({ toBack }) {
  const order = useSelector((state) => state.order);
  const toConfirm = () => {
    sendOrder(order);
  };
  return (
    <div className="modal-div">
      <div className="modal-content">
        <h2 className="title regular">Подтвердить заказ</h2>
        <Button className="btn confirm medium" onClick={toConfirm}>
          <h3 className="btn-text">Подтвердить</h3>
        </Button>
        <Button className="btn back medium" onClick={toBack}>
          <h3 className="btn-text">Вернуться</h3>
        </Button>
      </div>
    </div>
  );
}
export default OrderConfirmation;
