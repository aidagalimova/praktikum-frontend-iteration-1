import React from "react";
import { Form, Select } from "antd";
import map from "../../assets/image/map.png";
import "./index.scss";

function LocationForm() {
  return (
    <>
      <Form>
        <Form.Item className="city-item" label="Город" bordered={false}>
          <Select
            showSearch
            placeholder="Выберите город..."
            bordered={false}
            className="input"
          />
        </Form.Item>

        <Form.Item className="point-item" label="Пункт выдачи">
          <Select
            showSearch
            placeholder="Начните вводить пункт..."
            bordered={false}
            className="input"
          />
        </Form.Item>
      </Form>

      <h3 className="map-text">Выберите на карте:</h3>

      <img className="img" src={map} alt="map" />
    </>
  );
}

export default LocationForm;
