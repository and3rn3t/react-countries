import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Countries from "./Countries";

class App extends Component {
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
    return (
      <div className="App">
        <h1>Countries of the World</h1>
        <Countries countries={this.state.countries} />
      </div>
    );
  }
}

export default App;
