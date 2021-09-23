import { combineReducers } from "redux";
import carsReducer from "./reducers/cars";
import orderInfoReducer from "./reducers/order-info";
import stepReducer from "./reducers/steps";
import tariffsReducer from "./reducers/tariffs";

const rootReducer = combineReducers({
  order: orderInfoReducer,
  step: stepReducer,
  cars: carsReducer,
  tariffs: tariffsReducer
});

export default rootReducer;
