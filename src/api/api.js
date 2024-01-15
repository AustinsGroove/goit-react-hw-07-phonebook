import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://65a13aed600f49256fb13788.mockapi.io/phonebook/',
});
