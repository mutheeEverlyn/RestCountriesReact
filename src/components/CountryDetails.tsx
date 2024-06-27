import React from 'react';
import './CountryDetails.css'
 export interface Country {
  name: string;
  population: number;
  region: string;
  subregion?: string;
  capital?: string;
  flags: { svg: string };
  nativeName: string;
  topLevelDomain?: string[];
  currencies?: { name: string }[];
  languages?: { name: string }[];
  borders?: string[];
}

interface CountryDetailsProps {
  country: Country;
  onBack: () => void;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Back</button>
      <div className="country-details">
        <img src={country.flags.svg} alt={country.name} />
        <div>
          <h1>{country.name}</h1>
          <p><b>Native Name: </b>{country.nativeName}</p>
          <p><b>Population: </b>{country.population.toLocaleString()}</p>
          <p><b>Region: </b>{country.region}</p>
          <p><b>Sub Region: </b>{country.subregion}</p>
          <p><b>Capital: </b>{country.capital}</p>
          <p><b>Top Level Domain: </b>{country.topLevelDomain?.join(', ')}</p>
          <p><b>Currencies: </b>{country.currencies?.map(currency => currency.name).join(', ')}</p>
          <p><b>Languages: </b>{country.languages?.map(language => language.name).join(', ')}</p>
          <div>
            <b>Border Countries: </b>
            {country.borders?.map(border => (
              <span key={border}>{border} </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
