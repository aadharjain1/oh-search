import React, { useState } from 'react';
import Header from './Header';
import SearchResultsSection from './SearchResultsSection';
import Pagination from './Pagination';
import './App.scss';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPageResults, setCurrentPageResults] = useState([]);
  const [isSearchDirty, setIsSearchDirty] = useState(false);

  return (
    <div className="app">
      <Header setSearchResults={setSearchResults} setIsSearchDirty={setIsSearchDirty} />
      <SearchResultsSection currentPageResults={currentPageResults} isSearchDirty={isSearchDirty} />
      <Pagination searchResults={searchResults} setCurrentPageResults={setCurrentPageResults} />
    </div>
  );
}

export default App;
