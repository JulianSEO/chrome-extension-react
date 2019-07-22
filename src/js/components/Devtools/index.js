import React from "react";
import icon from "../../../img/icon-128.png";
import { hot } from "react-hot-loader/root";

class Devtools extends React.Component {
  render() {
    return (
      <div>
        <p>Hello,Dennis find me on src/js/Devtools/index.js</p>
        <img src={icon} />
      </div>
    );
  }
}

export default hot(Devtools);
