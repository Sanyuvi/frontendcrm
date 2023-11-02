import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./Context/AppProvider";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import loginReducer from "./Reducers/loginReducer";

const store = configureStore({
  reducer: {
    loginInfo: loginReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </BrowserRouter>
);
