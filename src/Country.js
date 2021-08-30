import { Component } from "react";
import "./App.css";

class Country extends Component {
  constructor(props) {
    super();
  }

  render() {
    return this.props.name;
  }
}

export default Country;
