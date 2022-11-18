import React from 'react';
import SearchButton from './buttons/SearchButton';
import SearchInput from './inputs/SearchInput';

const Search = () => {
  return (
    <section
      className="panel-block mb-2"
      style={{ background: '#0f2a50', height: '100px' }}
    >
      <SearchInput />
      <SearchButton />
    </section>
  );
};

export default Search;
