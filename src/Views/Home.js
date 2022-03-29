import React from 'react';
import { useEffect } from 'react';
import { fetchDogs } from '../services/dogs';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      console.log(data);
    };
    fetchData();
  }, []);

  return <div>Home</div>;
}
