import { Divider } from "antd";
import React from "react";
import LocationForm from "../../components/location-form";
import FormSteps from "../../components/steps";
import "./index.scss";

function MakeOrderPage() {
  return (
    <div className="page">
      <Divider />
      <FormSteps />
      <Divider />
      <LocationForm />
    </div>
  );
}

export default MakeOrderPage;
