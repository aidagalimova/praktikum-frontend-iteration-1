import { combineReducers } from "redux";
import orderInfoReducer from "./reducers/order-info";
import stepReducer from "./reducers/steps";

const rootReducer = combineReducers({
  order: orderInfoReducer,
  step: stepReducer,
});

export default rootReducer;
