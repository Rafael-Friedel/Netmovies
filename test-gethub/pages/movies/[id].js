import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import MovieCard from '../../components/cards/MovieCard';
import MovieCardWithDetails from '../../components/cards/MovieCardWithDetails';
import myContext from '../../context/myContext';

const PageDetails = () => {
  const { state } = useContext(myContext);

  return (
    <main>
      <MovieCardWithDetails
        name={state.movie.title}
        img={`${state.configuration.images.secure_base_url}original${state.movie.poster_path}`}
        overview={state.movie.overview}
      />
      <h2 className="py-2 px-6 is-italic subtitle">Filmes similares:</h2>
      <section className="columns px-4">
        {state.similarMovies.map(({ id, title, poster_path }) => (
          <MovieCard
            key={id}
            name={title}
            img={`${state.configuration.images.secure_base_url}original${poster_path}`}
            id={id}
          />
        ))}
      </section>
    </main>
  );
};

export default PageDetails;
