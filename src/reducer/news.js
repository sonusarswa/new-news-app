export default (initialState={news:[],load:true},action) => {
    switch(action.type){
        case "FETCH_ALL":
            return {...initialState, news:action.news,load:false};
        case "TECH_NEWS":
            return {...initialState,news:action.news,load:false};
        case "ENT_NEWS":
            return {...initialState,news:action.news,load:false};
        case "SPORTS_NEWS":
            return {...initialState,news:action.news,load:false};
        case "SEARCH_NEWS":
            return {...initialState,news:action.news,load:false};
        case "BUSINESS_NEWS":
            return {...initialState,news:action.news,load:false};
        case "LOAD":
            return {...initialState,news:[],load:true}
        default:
            return {news:action.news,load:true};
    }
}