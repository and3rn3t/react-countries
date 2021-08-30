import React from "react";
import "./CountryList.css";
import Country from "./Country/Country";

export default function CountryList(props) {
  const countries = props.countriesData.map((country, index) => {
    return (
      <li key={index}>
        <Country name={country.name} />
      </li>
    );
  });

  return <ol className="CountryList">{countries}</ol>;
}