import * as api from '../api/api';

export const getNews = () => async (dispatch) => {
    try{
        const {data} = await api.getAll();
        dispatch({type:"FETCH_ALL", payload:data.articles});
        console.log("Hello from getNews");
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}