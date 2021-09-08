/* eslint-disable no-unused-vars */

import React from "react";
import { Form, Select } from "antd";
import { connect } from "react-redux";
import map from "../../assets/image/map.png";
import { cityChange, pointChange } from "../../store/actions/order-info";
import "./index.scss";

const { Option } = Select;

const mapStateToProps = (state) => ({
  city: state.order.city,
  point: state.order.point,
});

const mapDispatchToProps = (dispatch) => ({
  handleCityChange: (value) => {
    dispatch(cityChange(value));
  },
  handlePointChange: (value) => {
    dispatch(pointChange(value));
  },
});

function LocationForm({
  handleCityChange,
  handlePointChange,
  point,
  city,
  locations,
}) {
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
