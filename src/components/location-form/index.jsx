import React, { useEffect } from "react";
import { Form, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { cityChange, pointChange } from "../../store/actions/order-info";
import map from "../../assets/image/map.png";
import "./index.scss";
import getCities, { getPoints } from "../../services/locations";

const { Option } = Select;

function LocationForm() {
  const dispatch = useDispatch();
  const { point, city } = useSelector((state) => state.order);
  const { cities, points } = useSelector((state) => state.locations);
  useEffect(() => {
    dispatch(getCities());
  }, []);

  const handleCityChange = (value) => {
    dispatch(cityChange(value));
    dispatch(getPoints(JSON.parse(value).id));
    dispatch(pointChange(null));
  };
  const handlePointChange = (value) => {
    dispatch(pointChange(value));
  };
  const citiesEls = () =>
    cities.map((location) => (
      <Option key={location.id} value={JSON.stringify(location)}>
        {location.name}
      </Option>
    ));

  const pointsEls = () =>
    points.map((p) => (
      <Option key={p.id} value={JSON.stringify(p)}>
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
            {citiesEls()}
          </Select>
        </Form.Item>

        <Form.Item className="point-item light" label="Пункт выдачи">
          <Select
            disabled={city === null}
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
            {pointsEls()}
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
