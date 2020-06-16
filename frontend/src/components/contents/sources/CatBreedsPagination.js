import React from "react";
import "./Cat.css";

const CatBreedsPagination = ({
  catsPerPage,
  totalCats,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCats / catsPerPage); i++) {
    console.log(Math.ceil(totalCats / catsPerPage));
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <span
          onClick={() => {
            prevPage();
            window.scrollTo(0, 0);
          }}
          className="page-link"
        >
          Previous
        </span>
      </li>

      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <span
            onClick={() => {
              paginate(number);
              window.scrollTo(0, 0);
            }}
            className="page-link page-btn"
          >
            {number}
          </span>
        </li>
      ))}

      <li className="page-item">
        <span
          onClick={() => {
            nextPage();
            window.scrollTo(0, 0);
          }}
          className="page-link"
        >
          Next
        </span>
      </li>
    </ul>
  );
};

export default CatBreedsPagination;
