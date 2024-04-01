import { useState } from 'react';

import { searchForShows } from './../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setApiDataError(null);
      const result = await searchForShows(searchStr);
      setApiData(result);
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
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    } else return null;
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
      <div>{renderApi()}</div>
    </div>
  );
};
export default Home;
