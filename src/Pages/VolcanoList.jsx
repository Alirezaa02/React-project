import React, { useState, useEffect } from "react";
import "../App.css";
import VolcTable from "./VolcTable";


const VolcanoList = () => {
  const [volcanoes, setVolcanoes] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
  const [country, setCountry] = useState("Japan");
  const [populationWithin, setPopulationWithin] = useState("30km");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("http://4.237.58.241:3000/countries");
        if (!response.ok) throw new Error("Failed to fetch countries");
        const data = await response.json();
        setCountriesList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchVolcanoes = async () => {
      const queryParams = new URLSearchParams({
        country: country,
        populatedWithin: populationWithin,
      });

      try {
        const response = await fetch(`http://4.237.58.241:3000/volcanoes?${queryParams}`);
        if (!response.ok) throw new Error("Failed to fetch volcanoes");
        const data = await response.json();
        setVolcanoes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVolcanoes();
  }, [country, populationWithin]);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handlePopulationWithinChange = (e) => {
    setPopulationWithin(e.target.value);
  };

  const handleSearch = () => {
    
  };
  

  return (
    <div className="volcano-list">
      <div className="filters">
        <label htmlFor="country-selector" className="filter-label">
          Country:
        </label>
        <select
          id="country-selector"
          className="filter-select-country"
          value={country}
          onChange={handleCountryChange}
        >
          {countriesList.map((countryName) => (
            <option key={countryName} value={countryName}>
              {countryName}
            </option>
          ))}
        </select>
        <label htmlFor="population-selector" className="filter-label">
          Populated within:
        </label>
        <select
          id="population-selector"
          className="filter-select-populated"
          value={populationWithin}
          onChange={handlePopulationWithinChange}
        >
          <option value="5km">5km</option>
          <option value="10km">10km</option>
          <option value="30km">30km</option>
          <option value="100km">100km</option>
        </select>

        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <VolcTable volcanoes={volcanoes} />

    

    </div>
  );
};

export default VolcanoList;