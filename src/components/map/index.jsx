import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { cityChange, pointChange } from "../../store/actions/order-info";

function YMap() {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.locations.points);
  const city = useSelector((state) => state.order.city);
  const [coords, setCoords] = useState([]);
  const [ymaps, setYmaps] = useState();

  function getGeocode(point) {
    ymaps.geocode(`${point.cityId.name} ${point.address}`).then((result) =>
      setCoords((prev) => [
        ...prev,
        {
          point,
          coords: result.geoObjects.get(0).geometry.getCoordinates(),
        },
      ])
    );
  }

  function getPointsGeocodes() {
    setCoords([]);
    // eslint-disable-next-line no-restricted-syntax
    for (const point of points) {
      getGeocode(point);
    }
  }
  useEffect(() => {
    if (ymaps) {
      getPointsGeocodes();
    }
  }, [ymaps, points]);

  function onPointClick(coord) {
    if (!city) dispatch(cityChange(JSON.stringify(coord.point.cityId)));
    dispatch(pointChange(JSON.stringify(coord.point)));
  }
  function PlacemarkEls() {
    if (city) {
      return coords.map(
        (coord) =>
          JSON.parse(city).id === coord.point.cityId.id && (
            <Placemark
              key={coord.point.id}
              geometry={coord.coords}
              onClick={() => onPointClick(coord)}
            />
          )
      );
    }
    return coords.map((coord) => (
      <Placemark geometry={coord.coords} onClick={() => onPointClick(coord)} />
    ));
  }
  return (
    <YMaps
      query={{
        ns: "use-load-option",
        apikey: "3595d9e9-0729-43b4-84f0-c05f9f580dac",
      }}
    >
      <div id="map-div">
        <Map
          modules={["geocode"]}
          defaultState={{ center: [54, 55], zoom: 3 }}
          onLoad={(api) => {
            setYmaps(api);
          }}
        >
          {coords && <PlacemarkEls />}
        </Map>
      </div>
    </YMaps>
  );
}

export default YMap;
