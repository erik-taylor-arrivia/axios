import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  headers: { // add header content if necessary for API
    // Authorization: 'Bearer {token}'
  }
});