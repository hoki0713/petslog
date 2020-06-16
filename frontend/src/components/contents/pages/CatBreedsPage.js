import React, { useEffect, useState } from 'react';
import { CatPosts, CatBreedsPagination } from '../sources';


const CatBreedsPage = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrenctPage] = useState(1);
  const [catsPerPage] = useState(15);


  useEffect(() => {
      const fetchData = async () => {
          setLoading(true);
          const response = await fetch('http://localhost:8080/cats/breedslist');
          if (response.status === 200) {
              const json = await response.json();
              console.log(json);
              setCats(json);
              setLoading(false);
          }
          else {
              console.log('failed to fetch: ' + response.status);
          }
      }
      fetchData();
  }, []);

  const indexOfLastCat = currentPage * catsPerPage;
  const indexOfFirstCat = indexOfLastCat - catsPerPage;
  const currentPosts = cats.slice(indexOfFirstCat, indexOfLastCat);

  const paginate = (pageNumber) => setCurrenctPage(pageNumber);

  const nextPage = () => setCurrenctPage(currentPage + 1);
  const prevPage = () => setCurrenctPage(currentPage - 1);

  return (
    <div>
        <CatBreedsPagination catsPerPage={catsPerPage} totalCats={cats.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}/>
        <CatPosts cats={currentPosts} loading={loading} startidx={indexOfFirstCat+1}/>
        <CatBreedsPagination catsPerPage={catsPerPage} totalCats={cats.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}/>
    </div>

  )
}

export default CatBreedsPage;