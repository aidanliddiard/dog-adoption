import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchDogById } from '../services/dogs';

export default function DogDetail() {
  const params = useParams();

  const [dog, setDog] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
    };
    fetchData();
  }, [params.id]);

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
    </div>
  );
}
