import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import CountryList from "./CountryList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: []
    };
  }

  componentDidMount = async () => {
    let response = await axios.get("https://restcountries.eu/rest/v2/all");
    this.setState({
      countries: response.data
    });

    // axios.get("https://restcountries.eu/rest/v2/all").then(response => {
    //   this.setState({
    //     countries: response.data
    //   });
    // });
  };

  render() {
    return (
      <div className="App">
        <h1>Countries of the World</h1>
        <CountryList countries={this.state.countries} />
      </div>
    );
  }
}

export default App;
