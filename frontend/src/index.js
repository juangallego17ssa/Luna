import "./Assets/fonts/Roboto/Roboto-Light.ttf";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Componets/home/home";
import { Provider } from "react-redux";
import myStore from "./Redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={myStore}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
