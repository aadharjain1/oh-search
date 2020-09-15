import React from 'react';
import SearchResult from './SearchResult';
import './SearchResultsSection.scss';

const SearchResultsSection = ({ currentPageResults, isSearchDirty }) => {
    return currentPageResults.length ? (
        <div className="searchResultsSection">
            { currentPageResults.map(searchResult => <SearchResult searchResult={searchResult} key={searchResult.cacheId} />) }
        </div>
    ) : isSearchDirty ? (
        <div className="searchResultsSection">
            No results found!
        </div>
    ) : (
        <></>
    );
}
  
export default SearchResultsSection;