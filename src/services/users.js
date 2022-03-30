import { client } from './client';

export function getUser() {
  return client.auth.session() && client.auth.session().user.email;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
  return user;
}
