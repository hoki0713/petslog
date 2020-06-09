import React from "react";
import {Image} from 'react-bootstrap';
import './DogList.css'

const DogList = ({ dogs }) => {
  return (
    <div className="list">
      <table>
        <thead>
          <th>No.</th>
          <th>Picture</th>
          <th>Breed</th>
          <th>Lifespan</th>
          <th>Temperament</th>
          <th>Intelligence</th>
        </thead>
        <tbody>
          {dogs.map((dog) => (
            <tr>
              <td>{dog.seq}</td>
              <td><Image className="dog-image" src={dog.imgUrl} /></td>
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

export default DogList;
