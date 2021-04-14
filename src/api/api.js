import axios from 'axios';

const apiKey = "37abc7b5d8fb43be92c052e416f18229";

const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

export const getAll = () => axios.get(url);