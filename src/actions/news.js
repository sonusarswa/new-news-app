import * as api from '../api/api';


export const getNews = () => async (dispatch) => {
    try{
        dispatch({type:"LOAD"});
        const {data} = await api.getAll();
        dispatch({type:"FETCH_ALL", news:data});
        console.log("Hello from getNews");
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

export const getNewsTech = () => async (dispatch) => {
    try{
        dispatch({type:"LOAD"});
        const {data} = await api.getTech();
        dispatch({type:"TECH_NEWS", news:data});
        console.log("Hello from getTechNews");
        console.log("TechNews : ", data);
    }
    catch(error){
        console.log(error);
    }
}

export const getNewsEnt = () => async (dispatch) => {
    try{
        dispatch({type:"LOAD"});
        const {data} = await api.getEnt();
        dispatch({type:"ENT_NEWS", news:data});
        console.log("Hello from getNewsEnt");
        console.log("EntNews : ", data);
    }
    catch(error){
        console.log(error);
    }
}

export const getNewsSports = () => async (dispatch) => {
    try {
        dispatch({type:"LOAD"});
        const {data} = await api.getSports();
        dispatch({type:"SPORTS_NEWS", news:data});
        console.log("Hello from getNewsSports");
        console.log("SportsNews : ",data);
    }
    catch(error){
        console.log(error);
    }
}
 
export const getNewsSearch = (search) => async (dispatch) => {
    try{
        dispatch({type:"LOAD"});
        const {data} = await api.getSearch(search);
        dispatch({type:"SEARCH_NEWS", news:data});
        console.log("Hello from getNewsSearch");
        console.log("The Search Value was : ", search);
        console.log("SearchNews : ", data);
    }
    catch(error){
        console.log(error);
    }
}

export const getNewsBusiness = () => async (dispatch) => {
    try{
        dispatch({type:"LOAD"});
        const {data} = await api.getBus();
        dispatch({type:"BUSINESS_NEWS", news:data});
        console.log("Hello from getNewsBusiness");
        console.log("BusinessNews : ", data);
    }
    catch(error){
        console.log(error);
    }
}