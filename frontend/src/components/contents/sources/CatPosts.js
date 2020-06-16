import React from "react";
import "./Cat.css";

const CatPosts = ({ cats, loading, startidx }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return (
    <div>
      <table className="table">
        <th>No</th>
        <th>Image</th>
        <th>Breed</th>
        <th>Lifespan</th>
        <th>Origin</th>
        <th>Temperament</th>
        {cats.map((cat, i) => (
          <tr key={cat.id}>
            <td>{i + startidx}</td>
            <td>
              <img className="image cat-image" src={cat.imgUrl} alt="cat" />
            </td>
            <td>{cat.breed}</td>
            <td>{cat.lifespan}</td>
            <td>{cat.origin}</td>
            <td>{cat.temperament}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CatPosts;
