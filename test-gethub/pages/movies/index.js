import { useContext, useEffect } from 'react';
import MovieCard from '../../components/cards/MovieCard';
import Search from '../../components/Search';
import myContext from '../../context/myContext';
import getConfigurationApi from '../../helpers/fetchs/getConfigurationApi';
import defaultImg from '../../helpers/utils/defaultImg';
import logo from '../../logo.png';

export default function Movies() {
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
      <section
        className="columns p-4 is-flex-wrap-wrap"
        style={{ background: '#191934' }}
      >
        {state.listMovies.length > 0 ? (
          state.listMovies.map(({ id, title, release_date, poster_path }) => (
            <MovieCard
              key={id}
              name={title}
              date={release_date.split('-').reverse().join('/')}
              img={
                poster_path
                  ? `${state.configuration.images.secure_base_url}original${poster_path}`
                  : defaultImg
              }
              id={id}
            />
          ))
        ) : (
          <img
            src={logo.src}
            alt="logo da página"
            style={{
              width: '100%',
              height: '100%',
              textAlign: 'center',
              objectFit: 'cover',
              margin: '178px',
            }}
          />
        )}
      </section>
    </main>
  );
}
