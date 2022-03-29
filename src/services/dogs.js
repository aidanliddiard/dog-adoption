import { client, checkError } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs').select('*');
  return checkError(resp);
}

export async function fetchDogById(id) {
  const resp = await client.from('dogs').select('*').match({ id }).single();
  return checkError(resp);
}

export async function createNewDog(dog) {
  const resp = await client.from('dogs').insert(dog);
  return checkError(resp);
}
