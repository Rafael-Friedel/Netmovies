import React from 'react';
import SearchButton from './buttons/searchButton';
import SearchInput from './inputs/searchInput';

const Search = () => {
  return (
    <section className="panel-block">
      <SearchInput />
      <SearchButton />
    </section>
  );
};

export default Search;
