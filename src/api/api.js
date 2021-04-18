import axios from 'axios';

const apiKey =process.env.REACT_APP_API_KEY;

const url = `http://localhost:5000/`;
const urlTech = `http://localhost:5000/tech`;
const urlEnt = `http://localhost:5000/ent`;
const urlSports = `http://localhost:5000/sports`;
const urlBusiness = `http://localhost:5000/business`;
// const urlSearch = ;





export const getAll = () => axios.get(url);
export const getTech = () => axios.get(urlTech);
export const getEnt = () => axios.get(urlEnt);
export const getSports = () => axios.get(urlSports);
export const getBus = () => axios.get(urlBusiness);
export const getSearch = (search) => axios.post(`http://localhost:5000/search`,{search});

