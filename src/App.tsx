import React, { useState } from 'react';
import Header from './components/Header';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Country } from './components/CountryDetails';
const App: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleBack = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="App">
      <Header />
      {selectedCountry ? (
        <CountryDetails country={selectedCountry} onBack={handleBack} />
      ) : (
        <CountriesList onSelectCountry={handleSelectCountry} />
      )}
    </div>
  );
};

export default App;
