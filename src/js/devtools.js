import "../css/devtools.css";
import Devtools from "./components/Devtools";
import React from "react";
import { render } from "react-dom";

chrome.devtools.panels.create(
  "My Panell",
  "icon-128.png",
  "devtools.html",
  panel => {
    render(<Devtools />, window.document.getElementById("root"));
  }
);
