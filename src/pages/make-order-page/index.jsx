import React from "react";
import LocationForm from "../../components/location-form";
import FormSteps from "../../components/steps";
import "./index.scss";

function MakeOrderPage() {
  return (
    <div className="page">
      <FormSteps />
      <LocationForm />
    </div>
  );
}

export default MakeOrderPage;
