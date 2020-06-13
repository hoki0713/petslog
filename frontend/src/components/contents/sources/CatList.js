import React from "react";
import {Image} from 'react-bootstrap'
import './CatList.css'

const CatList = ({cats}) => {
  return (
    <div className="list">
      <table>
        <thead>
          <th>No.</th>
          <th>Picture</th>
          <th>Breed</th>
          <th>Lifespan</th>
          <th>Origin</th>
          <th>Temperament</th>
        </thead>
        <tbody>
          {cats.map((cat, i) => (
            <tr>
              <td>{i+1}</td>
              <td><Image className="cat-image" src={cat.imgUrl} /></td>
              <td>{cat.breed}</td>
              <td>{cat.lifespan}</td>
              <td>{cat.origin}</td>
              <td>{cat.temperament}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CatList;
