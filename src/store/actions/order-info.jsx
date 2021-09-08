export const cityChange = (value) => ({
  type: "CHANGE_CITY",
  payload: {
    city: value,
  },
});

export const pointChange = (value) => ({
  type: "CHANGE_POINT",
  payload: {
    point: value,
  },
});

export const carModelChange = (value) => ({
  type: "CHANGE_CAR",
  payload: {
    selectedCar: value,
  },
});

export const colorChange = (value) => ({
  type: "CHANGE_COLOR",
  payload: {
    color: value,
  },
});

export const dateChange = (value) => ({
  type: "CHANGE_DATE",
  payload: {
    date: value,
  },
});

export const tariffChange = (value) => ({
  type: "CHANGE_TARIFF",
  payload: {
    tariff: value,
  },
});

export const servicesChange = (value) => ({
  type: "CHANGE_SERVICES",
  payload: {
    services: value,
  },
});

export const clearCarAdditions = () => ({
  type: "CLEAR_CAR_ADDITIONS",
});

export const clearAdditions = () => ({
  type: "CLEAR_ADDITIONS",
});
