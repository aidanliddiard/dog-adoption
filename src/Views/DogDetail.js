import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { deleteDogById, fetchDogById } from '../services/dogs';

export default function DogDetail() {
  const params = useParams();

  const [dog, setDog] = useState({});
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
    };
    fetchData();
  }, [params.id]);

  const handleDelete = async () => {
    try {
      await deleteDogById(params.id);
      history.push('/');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h2>{dog.name}</h2>
      <p>Hi! I am {dog.name}!</p>
      <ul>
        <li>Age: {dog.age}</li>
        <li>Breed: {dog.breed}</li>
      </ul>
      <img width="350px" src={dog.image} />
      <p>My trainers say I am `{dog.bio}`</p>
      <Link to={`/dog/${dog.id}/edit`}>Edit Dog</Link>
      <button onClick={handleDelete}>Delete Dog</button>
      {error && <p>{error}</p>}
    </div>
  );
}
