const initialState = {
  city: null,
  point: null,
  selectedCar: null,
  color: null,
  tariff: null,
  date: {
    start: null,
    end: null,
  },
  duration: [],
  services: null,
  priceMax: null,
  priceMin: null,
  totalPrice: 0
};
export default function orderInfoReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_CITY":
      return {
        ...state,
        city: action.payload.city,
      };

    case "CHANGE_POINT":
      return {
        ...state,
        point: action.payload.point,
      };

    case "CHANGE_CAR":
      return {
        ...state,
        selectedCar: action.payload.selectedCar,
      };

    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.payload.color,
      };

    case "CHANGE_TARIFF":
      return {
        ...state,
        rateId: action.payload.rateId,
      };

    case "CHANGE_DATE_DURATION":
      return {
        ...state,
        duration: action.payload.date.duration,
      };

    case "CHANGE_DATE":
      return {
        ...state,
        date: action.payload.date,
      };
    case "CHANGE_SERVICES":
      return {
        ...state,
        services: action.payload.services,
      };

    case "SET_PRICE":
      return {
        ...state,
        priceMin: action.payload.priceMin,
        priceMax: action.payload.priceMax
      };
    case "SET_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload.totalPrice
      }
    case "SET_ORDER":
      return action.payload
    default:
      return state;
  }
}
