import React from 'react';
import SearchBar from './SearchBar';
import './Header.scss';

const Header = ({ setSearchResults, setIsSearchDirty }) => {
    return(
        <header className="header">
            <div className="headerContents">
                <div className="logo">oh. search</div>
                <SearchBar setSearchResults={setSearchResults} setIsSearchDirty={setIsSearchDirty} />
            </div>
        </header>
    );
};

export default Header;