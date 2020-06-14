import React from 'react';
import './Dog.css';

const DogBreedsPagination = ({ dogsPerPage, totalDogs, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination">
            {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                    <span onClick={() => {
                        paginate(number);
                        window.scrollTo(0,0);
                    }}
                    className="page-link page-btn">
                        {number}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default DogBreedsPagination;