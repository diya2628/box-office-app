import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
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
  );
};
export default SearchForm;
