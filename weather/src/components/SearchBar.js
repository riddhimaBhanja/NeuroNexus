import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city.trim() !== '') {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 p-4">
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name"
        className="p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
