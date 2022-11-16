import axios from 'axios';

const myKey = process.env.NEXT_PUBLIC_MY_KEY;

const getMovieById = async (external_id) => {
  const base = 'https://api.themoviedb.org/3/movie/';
  const options = '&language=pt-BR&external_source=imdb_id';
  const url = `${base}${external_id}?api_key=${myKey}${options}`;
  const { data } = await axios.get(url);
  return data;
};

export default getMovieById;
