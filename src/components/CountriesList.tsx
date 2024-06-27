import React, { useState, useEffect } from 'react';
import { Country } from './CountryDetails'; // Assuming Country interface is defined in CountryDetails

interface CountriesListProps {
  onSelectCountry: (country: Country) => void;
}

const CountriesList: React.FC<CountriesListProps> = ({ onSelectCountry }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterRegion, setFilterRegion] = useState<string>('');

  useEffect(() => {
    fetch('/data.json') 
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredCountries = countries
    .filter((country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((country) =>
      filterRegion ? country.region === filterRegion : true
    );

  return (
    <div>
      <div className="filter-container">
        <input 
          type="text" 
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select 
          value={filterRegion}
          onChange={(e) => setFilterRegion(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="countries-container">
        {filteredCountries.map((country) => (
          <div 
            key={country.name}
            className="country-card"
            onClick={() => onSelectCountry(country)}
          >
            <img src={country.flags.svg} alt={country.name} />
            <div>
              <h3>{country.name}</h3>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital?.[0]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
