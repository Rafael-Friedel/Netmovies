import axios from 'axios';

const myKey = process.env.NEXT_PUBLIC_MY_KEY;

const getConfigurationApi = async () => {
  const url = `https://api.themoviedb.org/3/configuration?api_key=${myKey}`;
  const { data } = await axios.get(url);
  return data;
};

export default getConfigurationApi;
