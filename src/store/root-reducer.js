import { combineReducers } from "redux";
import carsReducer from "./reducers/cars";
import orderInfoReducer from "./reducers/order-info";
import stepReducer from "./reducers/steps";

const rootReducer = combineReducers({
  order: orderInfoReducer,
  step: stepReducer,
  cars: carsReducer,
});

export default rootReducer;
