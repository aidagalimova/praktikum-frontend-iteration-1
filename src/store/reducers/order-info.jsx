const initialState = {
  city: null,
  point: null,
  selectedCar: null,
  color: "Любой",
  tariff: "Поминутно",
  date: null,
  services: null,
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
        tariff: action.payload.tariff,
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

    case "CLEAR_ADDITIONS":
      return {
        ...state,
        color: "Любой",
        tariff: "Поминутно",
        date: [],
        services: null,
      };
      
    case "CLEAR_CAR_ADDITIONS":
      return {
        ...state,
        selectedCar: null,
        color: "Любой",
        tariff: "Поминутно",
        date: [],
        services: null,
      };
    default:
      return state;
  }
}
