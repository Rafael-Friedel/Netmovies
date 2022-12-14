import Image from 'next/image';
import { useContext, useEffect } from 'react';
import MovieCard from '../../components/cards/MovieCard';
import Header from '../../components/Header';
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
      <Header />
      <section className="columns p-4 is-flex-wrap-wrap b-cards">
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
          <Image
            src={logo.src}
            alt="logo da página"
            className="logo"
            width={500}
            height={500}
            layout="raw"
          />
        )}
      </section>
    </main>
  );
}
