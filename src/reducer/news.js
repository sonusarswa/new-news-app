export default (initialState={news:[],load:true,error:false},action) => {
    switch(action.type){
        case "FETCH_ALL":
            return {...initialState, news:action.news,load:false,error:false};
        case "TECH_NEWS":
            return {...initialState,news:action.news,load:false,error:false};
        case "ENT_NEWS":
            return {...initialState,news:action.news,load:false,error:false};
        case "SPORTS_NEWS":
            return {...initialState,news:action.news,load:false,error:false};
        case "SEARCH_NEWS":
            return {...initialState,news:action.news,load:false,error:false};
        case "BUSINESS_NEWS":
            return {...initialState,news:action.news,load:false,error:false};
        case "LOAD":
            return {...initialState,news:[],load:true,error:false}
        case "ERROR":
            return {...initialState,news:[],load:false,error:true}
        default:
            return {news:action.news,load:true};
    }
}