import React from "react";

const CatBreedsPagination = ({ catsPerPage, totalCats, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCats / catsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="catbreeds" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatBreedsPagination;
