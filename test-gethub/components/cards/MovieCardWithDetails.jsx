import PropTypes from 'prop-types';

const MovieCardWithDetails = (props) => {
  const { img, name, overview } = props;

  return (
    <section className="card ">
      <section className="card-image">
        <figure className="image">
          <img
            src={img}
            alt={`Capa do filme ${name}`}
            style={{ height: '650px' }}
          />
        </figure>
      </section>
      <section
        className="media-content px-6 py-4"
        style={{ background: '#fff3ff' }}
      >
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
