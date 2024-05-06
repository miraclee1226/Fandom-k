import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";
import App from "./App";
import "./styles/common.scss";
import "./styles/reset.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

ReactModal.setAppElement("#root");
