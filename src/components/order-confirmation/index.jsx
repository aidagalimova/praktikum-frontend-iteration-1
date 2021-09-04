import { Button } from "antd";
import React from "react";
import "./index.scss";

function OrderConfirmation() {
  return (
    <div className="modal-div">
      <div className="modal-content">
        <h2 className="title regular">Подтвердить заказ</h2>
        <Button className="btn confirm medium">
          <h3 className="btn-text">Подтвердить</h3>
        </Button>
        <Button className="btn back medium">
          <h3 className="btn-text">Вернуться</h3>
        </Button>
      </div>
    </div>
  );
}
export default OrderConfirmation;
