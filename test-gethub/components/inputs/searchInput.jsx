import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <p className="control has-icons-left pr-3">
      <input
        className="input is-primary"
        type="text"
        placeholder="Qual o filme?"
      />
      <span className="icon is-left">
        <BsSearch />
      </span>
    </p>
  );
};

export default SearchInput;
