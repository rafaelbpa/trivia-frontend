import axios from 'axios';

const triviaApi = axios.create({
  baseURL: 'https://opentdb.com/',
});

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export { api, triviaApi };
