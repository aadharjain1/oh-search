import React, { useState } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import searchIcon from './assets/search.svg'
import './SearchBar.scss';


const SearchBar = ({ setSearchResults, setIsSearchDirty }) => {
    const [searchInput, setSearchInput] = useState('');
    
    const search = (searchText) => {
        return fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCNQ_E_TVN93k2AaDO0v23eLsrQXaYjkTk&cx=018264299595958242005:dvs2adlrsca&q=${searchText}`, {
            headers: {
                "Content-Type": 'application/json'
            }
        });
    }
    
    const debouncedSearch = AwesomeDebouncePromise(search, 500);

    const handleChange = async (e) => {
        setSearchInput(e.currentTarget.value);
        if(e.currentTarget.value)
            setIsSearchDirty(true);
        else
            setIsSearchDirty(false);
        const response = await debouncedSearch(e.currentTarget.value);
        const data = await response.json();
        const results = data.items || [];
        setSearchResults(results);
    };

    
    return(
        <div className="searchBar">
            <img src={searchIcon} alt="" className="searchIcon" />
            <input type="search" className="search" placeholder="Search" value={searchInput} onChange={handleChange} />
        </div>
    );
};

export default SearchBar;