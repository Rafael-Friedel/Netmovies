/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const MovieCard = (props) => {
  const { img, name, date, id } = props;

  return (
    <section className="column is-one-fifth">
      <Link as={`/movies/${id}`} href="/movies/[id]">
        <a>
          <img
            width={238}
            height={358}
            className="border"
            src={img}
            alt={`Capa do filme ${name}`}
            id={id}
            data-testtid="movie-card"
          />
        </a>
        <p className="title is-size-6 is-uppercase title_card">{name}</p>
      </Link>
      {date && (
        <p className="is-italic has-text-weight-light color_date">
          {`Data de lançamento: ${date}`}
        </p>
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
