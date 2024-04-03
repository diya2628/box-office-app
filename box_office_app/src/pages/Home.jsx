import { useState } from 'react';

import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);
      if (searchOption == 'shows') {
        const result = await searchForShows(q);
        setApiData(result);
      } else {
        const result = await searchForPeople(q);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }

    // console.log(apiData);
    //   const response = await fetch(
    //     `https://api.tvmaze.com/search/shows?q=${searchStr}`
    //   );
    //   const body = await response.json;
    //   console.log(body);
  };

  const renderApi = () => {
    if (apiDataError) return <div>Error Occurred: {apiDataError.message}</div>;
    if (apiData) {
      return apiData[0].show ? (
        <ShowsGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    } else return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApi()}</div>
    </div>
  );
};
export default Home;
