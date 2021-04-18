import axios from 'axios';

const apiKey =process.env.REACT_APP_API_KEY;

const url = `https://news-webserver.herokuapp.com/`;
const urlTech = `https://news-webserver.herokuapp.com/tech`;
const urlEnt = `https://news-webserver.herokuapp.com/ent`;
const urlSports = `https://news-webserver.herokuapp.com/sports`;
const urlBusiness = `https://news-webserver.herokuapp.com/business`;
// const urlSearch = ;





export const getAll = () => axios.get(url);
export const getTech = () => axios.get(urlTech);
export const getEnt = () => axios.get(urlEnt);
export const getSports = () => axios.get(urlSports);
export const getBus = () => axios.get(urlBusiness);
export const getSearch = (search) => axios.post(`https://news-webserver.herokuapp.com/search`,{search});

