import React from "react";
import "./Dog.css";

const DogPosts = ({ dogs, loading, startidx }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Breed</th>
            <th>Lifespan</th>
            <th>Temperament</th>
            <th>Intelligence</th>
          </tr>
        </thead>
        <tbody>
          {dogs.map((dog, i) => (
            <tr key={i}>
              <td>{i + startidx}</td>
              <td>
                <img className="image dog-image" src={dog.imgUrl} alt="dog" />
              </td>
              <td>{dog.breed}</td>
              <td>{dog.lifespan}</td>
              <td>{dog.temperament}</td>
              <td>{dog.intelligence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DogPosts;
