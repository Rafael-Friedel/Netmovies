import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import getMoviesByName from '../../helpers/fetchs/getMoviesByName';

const SearchButton = () => {
  const { state, setState } = useContext(myContext);

  const searchMovies = async () => {
    setState({ ...state, loading: true });
    const listMovies = await getMoviesByName(state.movieName);
    setState({ ...state, movieName: '', listMovies, loading: false });
  };

  return (
    <button
      className={`button is-dark is-mediun px-3 ${
        state.loading && 'is-loading'
      }`}
      onClick={searchMovies}
      disabled={state.movieName.length < 2}
    >
      Buscar Filme
    </button>
  );
};

export default SearchButton;
