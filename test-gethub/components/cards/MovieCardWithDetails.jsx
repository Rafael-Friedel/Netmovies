import PropTypes from 'prop-types';

const MovieCardWithDetails = (props) => {
  const { img, name, overview } = props;

  return (
    <section className="card">
      <section className="card-image">
        <figure className="image is-2by1">
          <img src={img} alt="Capa do filme" />
        </figure>
      </section>
      <section className="media-content px-6 py-4">
        <h2 className="title is-4 is-uppercase">{name}</h2>
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
