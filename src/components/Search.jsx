import React, { useState } from "react";

import { AsyncPaginate } from "react-select-async-paginate";
import { REACT_APP_GEODB_URL, options } from "../api";

const Search = ({ selectSearchOption }) => {
  const [searchValue, setSearch] = useState(null);

  const getGeoDBCities = (searchValue) => {
    return fetch(
      `${REACT_APP_GEODB_URL}/cities?minPopulation=100000&namePrefix=${searchValue}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.country}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const searchInputHandler = (searchValue) => {
    setSearch(searchValue);
    selectSearchOption(searchValue);
  };

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={600}
      value={searchValue}
      onChange={searchInputHandler}
      loadOptions={getGeoDBCities}
    />
  );
};

export default Search;
