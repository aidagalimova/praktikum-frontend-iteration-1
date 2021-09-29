import { combineReducers } from "redux";
import carsReducer from "./reducers/cars";
import locationsReducer from "./reducers/locations";
import orderInfoReducer from "./reducers/order-info";
import stepReducer from "./reducers/steps";
import tariffsReducer from "./reducers/tariffs";

const rootReducer = combineReducers({
  order: orderInfoReducer,
  step: stepReducer,
  cars: carsReducer,
  tariffs: tariffsReducer,
  locations: locationsReducer
});

export default rootReducer;
