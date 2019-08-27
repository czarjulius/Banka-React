import jwtDecode from 'jwt-decode';

const token = localStorage.getItem('token');

const decodeToken = () => {
  const decoded = jwtDecode(token);
  return decoded;
};

export default decodeToken;
