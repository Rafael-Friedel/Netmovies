import axios from 'axios';

const myKey = process.env.NEXT_PUBLIC_MY_KEY;

const getMoviesByName = async (name) => {
  const base = 'https://api.themoviedb.org/3/search/movie?api_key=';
  const options = `&language=pt-BR&query=${name.replace(
    ' ',
    '%20'
  )}&page=1&include_adult=false`;
  const url = `${base}${myKey}${options}`;
  const { data } = await axios.get(url);
  return data.results;
};

export default getMoviesByName;
