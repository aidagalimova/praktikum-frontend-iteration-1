/* eslint-disable no-unused-vars */

import React from "react";
import { Form, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import map from "../../assets/image/map.png";
import { cityChange, pointChange } from "../../store/actions/order-info";
import "./index.scss";

const { Option } = Select;

function LocationForm({ locations }) {
  const dispatch = useDispatch();
  const point = useSelector((state) => state.order.point);
  const city = useSelector((state) => state.order.city);

  const handleCityChange = (value) => {
    dispatch(cityChange(value));
  };
  const handlePointChange = (value) => {
    dispatch(pointChange(value));
  };
  const cities = () =>
    locations.map((location) => (
      <Option key={location.id} value={location.city}>
        {location.city}
      </Option>
    ));

  const points = () =>
    locations[0].points.map((p) => (
      <Option key={p.id} value={p.name}>
        {p.name}
      </Option>
    ));
  return (
    <>
      <Form>
        <Form.Item className="city-item light" label="Город">
          <Select
            bordered={false}
            suffixIcon={null}
            showSearch
            placeholder="Выберите город..."
            className="input city"
            onChange={handleCityChange}
            value={city}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {cities()}
          </Select>
        </Form.Item>

        <Form.Item className="point-item light" label="Пункт выдачи">
          <Select
            bordered={false}
            suffixIcon={null}
            showSearch
            placeholder="Начните вводить пункт..."
            className="input"
            onChange={handlePointChange}
            value={point}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {points()}
          </Select>
        </Form.Item>
      </Form>
      <h3 className="map-text light">Выберите на карте:</h3>
      <div>
        <img className="map-img" src={map} alt="map" />
      </div>
    </>
  );
}

export default LocationForm;
