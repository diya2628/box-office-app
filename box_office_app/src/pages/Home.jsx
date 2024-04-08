import { useState } from 'react';

import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { TextCenter } from '../components/common/TextCenter';
const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });

    // const [apiData, setApiData] = useState(null);
    // const [apiDataError, setApiDataError] = useState(null);
    // try {
    //   setApiDataError(null);  //earlier used now using usequery
    //   if (searchOption == 'shows') {
    //     const result = await searchForShows(q);
    //     setApiData(result);
    //   } else {
    //     const result = await searchForPeople(q);
    //     setApiData(result);
    //   }
    // } catch (error) {
    //   setApiDataError(error);
    // }

    // console.log(apiData);
    //   const response = await fetch(
    //     `https://api.tvmaze.com/search/shows?q=${searchStr}`
    //   );
    //   const body = await response.json;
    //   console.log(body);
  };

  const renderApi = () => {
    if (apiDataError)
      return <TextCenter>Error Occurred: {apiDataError.message}</TextCenter>;
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
