import { useState } from 'react';

import { searchForShows, searchForPeople } from './../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setApiDataError(null);
      if (searchOption == 'shows') {
        const result = await searchForShows(searchStr);
        setApiData(result);
      } else {
        const result = await searchForPeople(searchStr);
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
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    } else return null;
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" onChange={onSearchInputChange} />
        <button type="submit">Search</button>
        <label>
          Shows
          <input
            type="radio"
            value="shows"
            name="searchOptions"
            onChange={onRadioChange}
            checked={searchOption === 'shows'}
          ></input>
        </label>

        <label>
          Actors
          <input
            type="radio"
            value="actors"
            name="searchOptions"
            onChange={onRadioChange}
            checked={searchOption === 'actors'}
          ></input>
        </label>
      </form>
      <div>{renderApi()}</div>
    </div>
  );
};
export default Home;
