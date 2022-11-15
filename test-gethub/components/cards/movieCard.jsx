import PropTypes from 'prop-types';
import React from 'react';

const MovieCard = (props) => {
  const { img, name, date } = props;
  return (
    <section className="card">
      <section className="card-image">
        <figure className="image is-4by3">
          <img src={img} alt="Capa do filme" />
        </figure>
      </section>
      <section className="card-content">
        <section className="media">
          <section className="media-content">
            <p className="title is-4 is-uppercase">{name}</p>
            <time
              datetime="2016-1-1"
              className="is-italic has-text-weight-light"
            >
              {date}
            </time>
          </section>
        </section>
      </section>
    </section>
  );
};

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default MovieCard;

// Os filmes devem ser listados com nome, imagem de capa e data de lançamento
