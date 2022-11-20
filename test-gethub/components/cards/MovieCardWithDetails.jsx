/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';

const MovieCardWithDetails = (props) => {
  const { img, name, overview } = props;

  return (
    <section>
      <img src={img} alt={`Capa do filme ${name}`} className="card-detail" />
      <section className="media-content px-6 py-4 b_overview">
        <h2 className="title is-4 is-uppercase text_center">{name}</h2>
        <p>{overview || 'Sinopse não informada!'}</p>
      </section>
    </section>
  );
};

MovieCardWithDetails.propTypes = {
  name: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default MovieCardWithDetails;
