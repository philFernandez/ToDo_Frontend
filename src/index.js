import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import ToDoApp from "./ToDoApp";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <StrictMode>
    <ToDoApp />
  </StrictMode>,
  document.getElementById("root")
);
