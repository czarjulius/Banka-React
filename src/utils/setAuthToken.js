import axios from '../api/axios';

const setAuthToken = (token) => {
  const Authorization = 'x-access-token';
  if (token) {
    // Apply to every request
    axios.defaults.headers.common[Authorization] = token;
  } else {
    // Delete Auth Header
    delete axios.defaults.headers.common[Authorization];
  }
};

export default setAuthToken;
