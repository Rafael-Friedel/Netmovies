import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import myContext from '../../context/myContext';

const SearchInput = () => {
  const { handleChange, state, setState } = useContext(myContext);

  return (
    <p className="control has-icons-left pr-3">
      <input
        className="input is-primary"
        type="text"
        placeholder="Qual o filme?"
        name="movieName"
        value={state.movieName}
        onChange={(e) => handleChange(e, state, setState)}
      />
      <span className="icon is-left">
        <BsSearch />
      </span>
    </p>
  );
};

export default SearchInput;
