import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import Header from "./header";
import Container from "./container";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Container />
  </React.StrictMode>,
  rootElement
);
