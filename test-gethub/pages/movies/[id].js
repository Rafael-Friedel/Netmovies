import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import MovieCard from '../../components/cards/MovieCard';
import MovieCardWithDetails from '../../components/cards/MovieCardWithDetails';
import myContext from '../../context/myContext';
import defaultImg from '../../helpers/utils/defaultImg';

const PageDetails = () => {
  const { state } = useContext(myContext);

  return (
    <main>
      <MovieCardWithDetails
        name={state.movie.title}
        img={
          state.movie.poster_path
            ? `${state.configuration.images.secure_base_url}original${state.movie.poster_path}`
            : defaultImg
        }
        overview={state.movie.overview}
      />
      {state.similarMovies.length > 0 ? (
        <h2 className="py-2 px-6 is-italic subtitle my-4">Filmes similares:</h2>
      ) : (
        <h2 className="py-2 px-6 is-italic subtitle my-4">
          Este filme não possui filmes similares
        </h2>
      )}
      <section
        className="columns px-4 is-flex-wrap-wrap"
        style={{ background: '#191934' }}
      >
        {state.similarMovies.map(({ id, title, poster_path }) => (
          <MovieCard
            key={id}
            name={title}
            img={
              poster_path
                ? `${state.configuration.images.secure_base_url}original${poster_path}`
                : defaultImg
            }
            id={id}
          />
        ))}
      </section>
    </main>
  );
};

export default PageDetails;
