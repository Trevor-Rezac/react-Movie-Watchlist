import { checkError, client } from './client';

export function getUser() {
  return client.auth.session() && client.auth.session().user;
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });
  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });
  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function searchMovies(searchQuery) {
  const response = await fetch(`/.netlify/functions/movies-endpoint?searchQuery=${searchQuery}`);

  const json = await response.json();

  return json.data.results;
}

export async function addToWatchlist(movie) {
  const response = await client
    .from('movie_watchlist')
    .insert(movie);

  return checkError(response);
}

export async function getWatchlistItems() {
  const response = await client
    .from('movie_watchlist')
    .select()
    .order('id');
  
  return checkError(response);
}

export async function watchedMovie(id) {
  const response = await client
    .from('movie_watchlist')
    .update({ watched: true })
    .match({ id })
    .single();

  return checkError(response);
}

export async function deleteMovie(id) {
  const response = await client
    .from('movie_watchlist')
    .delete()
    .match({ id: id });

  return checkError(response);
}