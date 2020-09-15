import React, { useState, useEffect } from 'react';
import './Pagination.scss';

const Pagination = ({ searchResults, setCurrentPageResults }) => {
    const resultsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        const startIndex = resultsPerPage * (currentPage - 1);
        const endIndex = startIndex + resultsPerPage;
        setCurrentPageResults(searchResults.slice(startIndex, endIndex))
    }, [searchResults, currentPage, setCurrentPageResults]);
    
    const createPageNumbers = () => {
        const totalPages = Math.ceil(searchResults.length/resultsPerPage);
        const pageNumbers = [];
        for(let i=1;i<=totalPages;i++){
            pageNumbers.push(i);
        }
        return pageNumbers;
    }

    const renderPageNumbers = () => {
        const pageNumbers = createPageNumbers();
        return pageNumbers.map(number => {
            return <li key={number} id={number} onClick={handleClick} className={number === currentPage ? "pageNumber selectedPage" : "pageNumber"}>{number}</li>
        });
    };

    const handleClick = (e) => {
        setCurrentPage(parseInt(e.target.id));
    }

    return (
        <div className="pagination">
            <ul className="pageList">
                {renderPageNumbers()}
            </ul>
        </div>
    );
};

export default Pagination;