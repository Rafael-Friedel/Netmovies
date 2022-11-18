import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import myContext from '../../context/myContext';

const MovieCard = (props) => {
  const { img, name, date, id } = props;
  const { selectMovie } = useContext(myContext);

  return (
    <section className="column is-one-fifth">
      <Link as={`/movies/${id}`} href="/movies/[id]">
        <figure>
          <img
            style={{ width: '238px', height: '358px' }}
            src={img}
            alt={`Capa do filme ${name}`}
            onClick={selectMovie}
            id={id}
            data-testtid="movie-card"
          />
        </figure>
        <p className="title is-size-6 is-uppercase">{name}</p>
      </Link>
      {date && (
        <p className="is-italic has-text-weight-light">{`Data de lançamento: ${date}`}</p>
      )}
    </section>
  );
};

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieCard;
