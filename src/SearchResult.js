import React from 'react';
import './SearchResult.scss';

const SearchResult = ({ searchResult }) => {
    return (
      <div className="searchResult">
        <div className="profileImage">
            <img src={searchResult.pagemap.cse_image[0].src} alt="" />
        </div>
        <div className="content">
            <div className="link">{searchResult.formattedUrl}</div>
            <div className="title">{searchResult.title}</div>
            <div className="description">{searchResult.snippet}</div>
        </div>
      </div>
    );
  }
  
  export default SearchResult;