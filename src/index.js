import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import "tachyons";
import { searchRobots, requestRobots } from "./reducers";


const logger = createLogger;
const store = configureStore({
  reducer: {
    searchRobots: searchRobots,
    requestRobots: requestRobots,
  },
  applyMiddleware: applyMiddleware(logger),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
