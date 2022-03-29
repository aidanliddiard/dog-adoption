import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDogById } from '../services/dogs';

export default function DogDetail() {
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      console.log(data);
    };
    fetchData();
  }, [params.id]);

  return <div>DogDetail</div>;
}
