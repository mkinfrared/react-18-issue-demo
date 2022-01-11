import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");

if (!container) {
  throw new Error("root element not found");
}

// const root = ReactDOM.createRoot(container);
//
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();