import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchDogs } from '../services/dogs';

export default function Home() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      console.log(data);
      setDogs(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dog/${dog.id}`}>
          <h3>{dog.name}</h3>
          <img width="250px" src={dog.image} />
        </Link>
      ))}
    </div>
  );
}
