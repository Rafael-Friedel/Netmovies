import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import getMoviesByName from '../../helpers/fetchs/getMoviesByName';

const SearchButton = () => {
  const { state } = useContext(myContext);

  return (
    <button
      className={`button is-dark is-mediun px-3 ${
        state.loading && 'is-loading'
      }`}
      type="submit"
      disabled={state.movieName.length < 2}
    >
      Buscar Filme
    </button>
  );
};

export default SearchButton;
