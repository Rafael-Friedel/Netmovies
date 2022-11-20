import Image from 'next/image';
import React, { useContext } from 'react';
import myContext from '../context/myContext';
import getMoviesByName from '../helpers/fetchs/getMoviesByName';
import logo from '../logo.png';
import SearchButton from './buttons/SearchButton';
import SearchInput from './inputs/SearchInput';

const Header = () => {
  const { state, setState } = useContext(myContext);

  const searchMovies = async (e) => {
    e.preventDefault();
    setState({ ...state, loading: true });
    const listMovies = await getMoviesByName(state.movieName);
    setState({ ...state, movieName: '', listMovies, loading: false });
  };

  const reloadPage = () => {
    setState({ ...state, listMovies: [] });
  };

  return (
    <form className="panel-block mb-2 component_search" onSubmit={searchMovies}>
      <Image
        onClick={reloadPage}
        src={logo.src}
        alt="logo da página"
        className="mx-4"
        width={200}
        height={100}
        layout="raw"
        style={{ cursor: 'pointer' }}
      />
      <SearchInput />
      <SearchButton />
    </form>
  );
};

export default Header;
