import React from "react";
import Country from "./Country";

function CountryList(props) {
  const allCountries = props.countries.map((country, index) => {
    return <Country country={country} key={index} />;
  });
  return (
    <div>
      <h1>CountryList</h1>
      {allCountries}
    </div>
  );
}

export default CountryList;
