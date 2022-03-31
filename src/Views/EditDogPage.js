import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DogForm from '../components/DogForm';
import { editDogById, fetchDogById } from '../services/dogs';
import { useHistory } from 'react-router-dom';

export default function EditDogPage() {
  const params = useParams();
  const history = useHistory();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setName(data.name);
      setAge(data.age);
      setBreed(data.breed);
      setImage(data.image);
      setBio(data.bio);
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async () => {
    try {
      await editDogById({ name, breed, bio, image, age, id: params.id });
      history.push(`/dog/${params.id}`);
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div>
      <h3>Edit Dog</h3>
      {error && <p>{error}</p>}
      <DogForm
        {...{
          name,
          setName,
          age,
          setAge,
          breed,
          setBreed,
          bio,
          setBio,
          image,
          setImage,
          handleSubmit,
        }}
      />
    </div>
  );
}
