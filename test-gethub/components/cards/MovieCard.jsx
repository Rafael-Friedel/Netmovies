import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import myContext from '../../context/myContext';

const MovieCard = (props) => {
  const { img, name, date, id } = props;
  const { selectMovie } = useContext(myContext);

  return (
    <section className="card">
      <section className="card-image">
        <Link as={`/movies/${id}`} href="/movies/[id]">
          <figure className="image is-4by3">
            <img src={img} alt="Capa do filme" onClick={selectMovie} id={id} />
          </figure>
        </Link>
      </section>
      <section className="card-content">
        <section className="media">
          <section className="media-content">
            <p className="title is-4 is-uppercase">{name}</p>
            {date && <p className="is-italic has-text-weight-light">{date}</p>}
          </section>
        </section>
      </section>
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
