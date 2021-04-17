import axios from 'axios';

const apiKey =process.env.REACT_APP_API_KEY;

const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
const urlTech = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apiKey}`;
const urlEnt = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`;
const urlSports = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`;
const urlBusiness = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;



export const getAll = () => axios.get(url);
export const getTech = () => axios.get(urlTech);
export const getEnt = () => axios.get(urlEnt);
export const getSports = () => axios.get(urlSports);
export const getSearch = (search) => axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`);
export const getBus = () => axios.get(urlBusiness);
