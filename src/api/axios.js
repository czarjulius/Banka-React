import axios from 'axios';

const axiosInstance = () => {
  return axios.create({
    baseURL: 'https://julius-banka.herokuapp.com/api/v1',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default axiosInstance;
