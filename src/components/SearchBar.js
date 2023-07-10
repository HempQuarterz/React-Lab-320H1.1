import React, { useState } from 'react'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
};

  return (
    <div>
    <input
    type="text"
    placeholder=" "
    value={searchQuery}
    onChange={handleInputChange}
    style={{width: "98%", height: "40px", border: "3px solid green"}}
    />
    </div>
  );
};

export default SearchBar