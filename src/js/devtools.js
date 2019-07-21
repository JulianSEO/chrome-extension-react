import ReactHotLoader from "react-hot-loader"
import "../css/devtools.css"
import Devtools from "./devtools/"
import React from "react"
import { render } from "react-dom"

chrome.devtools.panels.create(
  "My Panel",
  "icon-128.png",
  "devtools.html",
  panel => {
    render(<Devtools />, window.document.getElementById("app-container"))
  }
)
