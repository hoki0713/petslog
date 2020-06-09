import React, { useState, useEffect } from "react";
import { DogList } from '../sources'

const DogBreedsPage = () => {
  const [dogs, setDogs] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/dogs/breedslist");
      if (response.status === 200) {
        const json = await response.json();
        setDogs(json);
      } else {
        console.log("failed to fetch: " + response.status);
      }
    }
    fetchData();
  }, []);
  return <DogList dogs={dogs} />
};

export default DogBreedsPage;
