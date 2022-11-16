import React from 'react';
import SearchButton from './buttons/SearchButton';
import SearchInput from './inputs/SearchInput';

const Search = () => {
  return (
    <section className="panel-block">
      <SearchInput />
      <SearchButton />
    </section>
  );
};

export default Search;
