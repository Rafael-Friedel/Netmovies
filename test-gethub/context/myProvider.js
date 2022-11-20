import PropTypes from 'prop-types';
import React, { useState } from 'react';
import getMovieById from '../helpers/fetchs/getMovieById';
import getSimilarMovies from '../helpers/fetchs/getSimilarMovies';
import myContext from './myContext';

function MyProvider({ children }) {
  const [state, setState] = useState({
    movieName: '',
    listMovies: [],
    configuration: {},
    similarMovies: [],
    movie: {},
    loading: false,
  });

  const handleChange = ({ target }, state, setState) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const selectMovie = async (id) => {
    const movie = await getMovieById(id);
    const similarMovies = await getSimilarMovies(id);
    setState({ ...state, movie, similarMovies });
  };

  const store = {
    handleChange,
    state,
    setState,
    selectMovie,
  };

  return <myContext.Provider value={store}>{children}</myContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;
