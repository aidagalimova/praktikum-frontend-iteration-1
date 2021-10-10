import React, { useEffect } from "react";
import { Form, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { cityChange, pointChange } from "../../store/actions/order-info";
import "./index.scss";
import getCities, { getPoints } from "../../services/locations";
import YMap from "../map";

const { Option } = Select;

function LocationForm() {
  const dispatch = useDispatch();
  const { point, city } = useSelector((state) => state.order);
  const { cities, points } = useSelector((state) => state.locations);
  useEffect(() => {
    dispatch(getCities());
    dispatch(getPoints());
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
  const props = {
    bordered: false,
    suffixIcon: null,
    showSearch: true,
    filterOption: (input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
  };
  return (
    <>
      <Form>
        <Form.Item className="city-item light" label="Город">
          <Select
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            placeholder="Выберите город..."
            className="input city"
            onChange={handleCityChange}
            value={city && JSON.parse(city).name}
          >
            {citiesEls()}
          </Select>
        </Form.Item>

        <Form.Item className="point-item light" label="Пункт выдачи">
          <Select
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            disabled={city === null}
            placeholder="Начните вводить пункт..."
            className="input"
            onChange={handlePointChange}
            value={point}
          >
            {pointsEls()}
          </Select>
        </Form.Item>
      </Form>
      <h3 className="map-text light">Выберите на карте:</h3>
      <div>
        <YMap />
      </div>
    </>
  );
}

export default LocationForm;
