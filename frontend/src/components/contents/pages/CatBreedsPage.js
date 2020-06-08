import React, { useEffect, useState } from 'react';
import { CatList } from '../sources'

const CatBreedsPage = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/cats/breedslist');
      if (response.status === 200) {
        const json = await response.json();
        setCats(json);
      }
      else {
        console.log('failed to fetch: ' + response.status);
      }
    }
    fetchData();
  }, []);
  return <CatList cats={cats} />
}

export default CatBreedsPage;