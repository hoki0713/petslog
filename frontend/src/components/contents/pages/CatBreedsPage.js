import React, { useEffect, useState } from 'react';
import { CatList, CatBreedsPagination } from '../sources';

const CatBreedsPage = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrenctPage] = useState(1);
  const [catsPerPage] = useState(10);

  useEffect(() => {
      const fetchData = async () => {
          setLoading(true);
          const response = await fetch('http://localhost:8080/cats/breedslist');
          if (response.status === 200) {
              const json = await response.json();
              setCats(json);
              setLoading(false);
          }
          else {
              console.log('failed to fetch: ' + response.status);
          }
      }
      fetchData();
  }, []);

  const indexOfLastPost = currentPage * catsPerPage;
  const indexOfFirstPage = indexOfLastPost - catsPerPage;
  const currentPosts = cats.slice(indexOfFirstPage, indexOfLastPost);

  const paginate = (pageNumber) => setCurrenctPage(pageNumber);

  return (
    <div>
        <CatList cats={currentPosts} loading={loading}/>
        <CatBreedsPagination catsPerPage={catsPerPage} totalCats={cats.length} paginate={paginate}/>
    </div>

  )
}

export default CatBreedsPage;