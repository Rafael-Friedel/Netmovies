import { useContext, useEffect } from 'react';
import MovieCard from '../../components/cards/MovieCard';
import Search from '../../components/Search';
import myContext from '../../context/myContext';
import getConfigurationApi from '../../helpers/fetchs/getConfigurationApi';

export default function Home() {
  const { state, setState } = useContext(myContext);

  const setConfiguration = async () => {
    const configuration = await getConfigurationApi();
    setState({ ...state, configuration });
  };

  useEffect(() => {
    setConfiguration();
  }, []);

  return (
    <main>
      <Search />
      {state.listMovies.map(({ id, title, release_date, poster_path }) => (
        <MovieCard
          key={id}
          name={title}
          date={release_date}
          img={`${state.configuration.images.secure_base_url}original${poster_path}`}
          id={id}
        />
      ))}
    </main>
  );
}
