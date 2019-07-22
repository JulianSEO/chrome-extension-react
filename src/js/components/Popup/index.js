import React from "react";
import icon from "../../../img/icon-128.png";
import { hot } from "react-hot-loader/root";

class Popup extends React.Component {
  render() {
    return (
      <div>
        <p>Hello,sdfds find me on src/js/Popup/index.js</p>
        <img src={icon} />
      </div>
    );
  }
}

export default hot(Popup);
