const BASE_URL = 'https://api.tvmaze.com';
const getapi = async queryString => {
  // throw new Error('something bad happened');
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();
  return body;
};

export const searchForShows = query => getapi(`/search/shows?q=${query}`);
export const searchForPeople = query => getapi(`/search/people?q=${query}`);
export const getShowById = showId =>
  getapi(`/shows/${showId}?embed[]=seasons&embed[]=cast`);
