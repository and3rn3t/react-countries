import React, { Component } from "react";
import "./App.css";
import Country from "./Country";

class Countries extends Component {
  constructor(props) {
    super();
  }

  render() {
    let countries = this.props.countries.map((country) => {
      return <li><Country name = {country.name} /></li>
    })
    return <ul>{countries}</ul>;
  }
}

export default Countries;
