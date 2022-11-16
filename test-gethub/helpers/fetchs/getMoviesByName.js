import axios from 'axios';

const myKey = '58a04592f5640cf46df9e239e612ecff';

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
