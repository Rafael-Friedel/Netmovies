import axios from 'axios';

const myKey = '58a04592f5640cf46df9e239e612ecff';

const getConfigurationApi = async () => {
  const url = `https://api.themoviedb.org/3/configuration?api_key=${myKey}`;
  const { data } = await axios.get(url);
  return data;
};

export default getConfigurationApi;
