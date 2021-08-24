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
  function Cities() {
    locations.map((location) => (
      <Option key={location.id} value={location.city}>
        {location.city}
      </Option>
    ));
  }

  function Points() {
    locations[0].points.map((point) => (
      <Option key={point.id} value={point.name}>
        {point.name}
      </Option>
    ));
  }

  return (
    <>
      <Form>
        <Form.Item className="city-item" label="Город" bordered={false}>
          <Select
            suffixIcon={null}
            showSearch
            placeholder="Выберите город..."
            bordered={false}
            className="input"
            onChange={handleCityChange}
            value={order.city}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Cities />
          </Select>
        </Form.Item>

        <Form.Item className="point-item" label="Пункт выдачи">
          <Select
            suffixIcon={null}
            showSearch
            placeholder="Начните вводить пункт..."
            bordered={false}
            className="input"
            onChange={handlePointChange}
            value={order.point}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {Points}
          </Select>
        </Form.Item>
      </Form>

      <h3 className="map-text">Выберите на карте:</h3>
      <img className="map-img" src={map} alt="map" />
    </>
  );
}

export default LocationForm;
