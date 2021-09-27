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

export const dateDuartionChange = (dateDuration) => ({
  type: "CHANGE_DATE_DURATION",
  payload: {
    date: {
      duration: dateDuration,
    },
  },
});

export const dateChange = (dateStart, dateEnd) => ({
  type: "CHANGE_DATE",
  payload: {
    date: {
      start: dateStart,
      end: dateEnd,
    },
  },
});

export const tariffChange = (value, id) => ({
  type: "CHANGE_TARIFF",
  payload: {
    tariff: value,
    tariffId: id
  },
});

export const servicesChange = (value) => ({
  type: "CHANGE_SERVICES",
  payload: {
    services: value,
  },
});

export const priceSet = (min, max) => ({
  type: "SET_PRICE",
  payload: {
    priceMin: min,
    priceMax: max
  },
});

export const totalPriceSet = (total) => ({
  type: "SET_TOTAL_PRICE",
  payload: {
    totalPrice: total
  }
})


export const orderSet = (
  city, point, selectedCar, color, tariff,
  dateFrom, dateTo, services, totalPrice, number, orderStatusId, id) => ({
    type: "SET_ORDER",
    payload: {
      city,
      point,
      selectedCar,
      color,
      tariff,
      date: {
        start: dateFrom,
        end: dateTo,
      },
      duration: [dateTo - dateFrom],
      services,
      priceMax: null,
      priceMin: null,
      totalPrice,
      number,
      orderStatusId,
      id
    }
  })

