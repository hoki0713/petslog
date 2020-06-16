import React from "react";
import "./Dog.css";

const DogBreedsPagination = ({
  dogsPerPage,
  totalDogs,
  currentPage,
  currentBlock,
  pagePerBlock,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    console.log(pageNumbers.push(i));
  }
  const totalBlock = Math.ceil(pageNumbers.length / pagePerBlock);

  const tempArr = [];
  for (let i = 0; i < totalBlock; i++) {
    tempArr[i] = [];
    for (let j = 1; j <= pagePerBlock; j++) {
     tempArr[i].push(i * pagePerBlock + j);
    }
  }
  console.log(tempArr);
  console.log(pageNumbers);
  console.log(totalBlock);
  console.log(currentBlock);

  if (totalDogs === 0) {
      return null;
  }

  return (
    <ul className="pagination justify-content-center">
      <li className="page-item page-btn">
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

      {tempArr[currentBlock].map((number) => (
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

      <li className="page-item page-btn">
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

export default DogBreedsPagination;
