// import React, { StrictMode } from "react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StaticHeader from "./StaticHeader";
import Routes from "./Routes";

ReactDOM.render(
  <Router>
    <StaticHeader />
    <Routes />
  </Router>,
  document.getElementById("root")
);
