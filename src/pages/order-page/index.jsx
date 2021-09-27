/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Divider } from "antd";
import MainPageHeader from "../../components/header";
import Sidebar from "../../components/sidebar";
import Total from "../../components/total-order";
import OrderInfo from "../../components/order-info";
import "./index.scss";
import { getOrder } from "../../services/order";

function OrderPage({ match }) {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(getOrder(match.params.id));
  }, []);
  if (order.color) {
    return (
      <div className="page">
        <Sidebar isMain={false} />
        <div className="page-content">
          <Row justify="center">
            <Col className="content-col" flex="1310px">
              <div className="steps-div">
                <div className="header">
                  <MainPageHeader />
                </div>
                <Divider className="top" />
                <h3 className="order-number-text bold">
                  Заказ номер {order.number}
                </h3>
                <Divider className="bottom" />
              </div>
              <Row className="location-info-row">
                <Col flex="0 0 900px" className="location-form-col">
                  {(order.orderStatusId.name === "Отмененые" && (
                    <h2 className="title-text regular">Ваш заказ отменён</h2>
                  )) ||
                    (order.orderStatusId.name === "Подтвержденные" && (
                      <h2 className="title-text regular">
                        Ваш заказ подтверждён
                      </h2>
                    )) || (
                      <h2 className="title-text regular">
                        Ваш заказ еще не подтверждён
                      </h2>
                    )}
                  <Total isMakePage={false} />
                </Col>
                <Col className="order-info-col">
                  <OrderInfo />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
  return <div>...</div>;
}
export default OrderPage;
