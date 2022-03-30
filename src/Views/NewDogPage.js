import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DogForm from '../components/DogForm';
import { createNewDog } from '../services/dogs';

export default function NewDogPage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = async () => {
    try {
      await createNewDog({ name, age, breed, bio, image });
      history.push('/');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h3>New Dog Intake Form</h3>
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
