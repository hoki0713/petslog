import React from "react";

const CatPosts = ({ cats }) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
  return (
  <div className="container">
      <ul className="list-group mb-4">
          {cats.map((cat, i) => {
          <li key={cat.id} className="list-group=-item">
              {i+1}
              {cat.breed}
              {cat.lifespan}
              {cat.origin}
              {cat.temprament}

          </li>
          })}

      </ul>


  </div>);
};

export default CatPosts;