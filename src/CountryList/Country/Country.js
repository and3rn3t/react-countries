import axios from "axios";
import React, { Component } from "react";
import "./Country.css";

class Country extends Component {
  constructor(props) {
    super(props);

    this.url = `https://restcountries.eu/rest/v2/name/${this.props.name}`;

    this.state = {
      capital: null,
      currency: null,
      first_language: null,
    };
  }

  handleClick = async (event) => {
    event.preventDefault();

    const result = await axios.get(this.url);
    const country = result.data[0];

    this.setState({
      capital: country.capital,
      currency: country.currencies[0].name,
      first_language: country.languages[0].name,
    });
  };

  displayData() {
    if (
      this.state.capital &&
      this.state.currency &&
      this.state.first_language
    ) {
      let info = (
        <ul>
          <li>
            The capital is <b>{this.state.capital}</b>
          </li>
          <li>
            The primary currency is <b>{this.state.currency}</b>
          </li>
          <li>
            The primary language is <b>{this.state.first_language}</b>
          </li>
        </ul>
      );

      return info;
    }
    return "";
  }

  render() {
    return (
      <div className="Country">
        <a href="#" onClick={this.handleClick}>
          {this.props.name}
        </a>

        {this.displayData()}
      </div>
    );
  }
}

export default Country;
