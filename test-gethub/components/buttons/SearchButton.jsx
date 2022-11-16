import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import getMoviesByName from '../../helpers/fetchs/getMoviesByName';

const SearchButton = () => {
  const { state, setState } = useContext(myContext);

  const searchMovies = async () => {
    const listMovies = await getMoviesByName(state.movieName);
    setState({ ...state, movieName: '', listMovies });
  };

  return (
    <button className="button is-dark is-mediun px-3" onClick={searchMovies}>
      Buscar Filme
    </button>
  );
};

export default SearchButton;
