import React, { useState, useEffect } from "react";
import { DogPosts, DogBreedsPagination } from "../sources";

const DogBreedsPage = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(15);
  const [pagePerBlock] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:8080/dogs/breedslist");
      if (response.status === 200) {
        const json = await response.json();
        setDogs(json);
        setLoading(false);
      } else {
        console.log("failed to fetch: " + response.status);
      }
    };
    fetchData();
  }, []);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentPosts = dogs.slice(indexOfFirstDog, indexOfLastDog);
  const currentBlock = Math.floor(currentPage / pagePerBlock);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <DogBreedsPagination
        dogsPerPage={dogsPerPage}
        totalDogs={dogs.length}
        currentPage={currentPage}
        pagePerBlock={pagePerBlock}
        currentBlock={currentBlock}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <DogPosts
        dogs={currentPosts}
        loading={loading}
        startidx={indexOfFirstDog + 1}
      />
      <DogBreedsPagination
        dogsPerPage={dogsPerPage}
        totalDogs={dogs.length}
        currentPage={currentPage}
        pagePerBlock={pagePerBlock}
        currentBlock={currentBlock}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default DogBreedsPage;
