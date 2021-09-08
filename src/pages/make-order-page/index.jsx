import React from "react";
import { connect } from "react-redux";
import { Divider, Col, Row } from "antd";
import FormSteps from "../../components/steps";
import Sidebar from "../../components/sidebar";
import MainPageHeader from "../../components/header";
import LocationForm from "../../components/location-form";
import OrderInfo from "../../components/order-info";
import CarModels from "../../components/car-models";
import AdditionsForm from "../../components/additions-form";
import Total from "../../components/total-order";
import locations, { cars } from "./consts";
import OrderConfirmation from "../../components/order-confirmation";
import stepChange from "../../store/actions/steps";
import {
  clearAdditions,
  clearCarAdditions,
} from "../../store/actions/order-info";
import "./index.scss";

const mapStateToProps = (state) => ({
  step: state.step,
});

const mapDispatchToProps = (dispatch) => ({
  handleStepChange: (value) => {
    dispatch(stepChange(value));
    if (value === 0) {
      dispatch(clearCarAdditions());
    } else if (value === 1) {
      dispatch(clearAdditions());
    }
  },
});

function MakeOrderPage({ step, handleStepChange }) {
  return (
    <div className="page">
      {step === 4 && (
        <OrderConfirmation
          toBack={() => handleStepChange(3)}
          toConform={() => handleStepChange(5)}
        />
      )}
      <Sidebar isMain={false} />
      <div className="page-content">
        <Row justify="center">
          <Col className="content-col" flex="1310px">
            <div className="steps-div">
              <div className="header">
                <MainPageHeader />
              </div>
              <Divider className="top" />
              <FormSteps onStepChange={handleStepChange} />
              <Divider className="bottom" />
            </div>
            <Row className="location-info-row">
              <Col flex="0 0 900px" className="location-form-col">
                {step === 0 && <LocationForm locations={locations} />}
                {step === 1 && <CarModels cars={cars} />}
                {step === 2 && <AdditionsForm />}
                {(step === 3 || step === 4) && <Total />}
              </Col>
              <Col className="order-info-col">
                <OrderInfo onStepChange={handleStepChange} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeOrderPage);
