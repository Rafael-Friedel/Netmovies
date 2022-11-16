import axios from 'axios';

const myKey = '58a04592f5640cf46df9e239e612ecff';

const getSimilarMovies = async (movie_id) => {
  const base = 'https://api.themoviedb.org/3/movie/';
  const url = `${base}${movie_id}/similar?api_key=${myKey}&language=pt-BR`;
  const { data } = await axios.get(url);
  return data.results;
};

export default getSimilarMovies;
