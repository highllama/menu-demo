import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <Search className="search-icon" size={20} />
        <input 
          type="text" 
          placeholder="Buscar" 
          className="search-input"
        />
      </div>
      <button className="filter-btn">
        <SlidersHorizontal size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
