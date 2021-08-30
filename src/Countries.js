import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Country from "./Country";

class Countries extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
    };
  }

  async componentDidMount() {
    let result = await axios.get("https://restcountries.eu/rest/v2/all");
    this.setState({ countries: result.data });
  }

  render() {
    let countries = this.props.countries.map((country) => {
      return <li><Country name = {country.name} /></li>
    })
    return <ul>{countries}</ul>;
  }
}

export default Countries;
