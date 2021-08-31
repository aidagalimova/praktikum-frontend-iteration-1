import React from "react";
import { Form, Select } from "antd";
import map from "../../assets/image/map.png";
import "./index.scss";

const { Option } = Select;

function LocationForm({
  order,
  handleCityChange,
  handlePointChange,
  locations,
}) {
  const cities = () =>
    locations.map((location) => (
      <Option key={location.id} value={location.city}>
        {location.city}
      </Option>
    ));

  const points = () =>
    locations[0].points.map((point) => (
      <Option key={point.id} value={point.name}>
        {point.name}
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
            value={order.city}
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
            value={order.point}
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
