import React from 'react';
import './Dog.css';

const DogPosts = ({ dogs, loading, startidx }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <table className="table">
                <th>No</th>
                <th>Image</th>
                <th>Breed</th>
                <th>Lifespan</th>
                <th>Temperament</th>
                <th>Intelligence</th>
                {dogs.map((dog, i) => (
                    <tr key={dog.id}>
                        <td>{i + startidx}</td>
                        <td><img className="image dog-image" src={dog.imgUrl} alt="dog" /></td>
                        <td>{dog.breed}</td>
                        <td>{dog.lifespan}</td>
                        <td>{dog.temperament}</td>
                        <td>{dog.intelligence}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default DogPosts;