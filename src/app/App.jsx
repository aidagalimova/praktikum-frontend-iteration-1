import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import "antd/dist/antd.css";
import "./App.scss";
import Routing from "../pages/routing";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Routing />
      </div>
    </Provider>
  );
}

export default App;
