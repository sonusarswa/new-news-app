export default (news=[],action) => {
    switch(action.type){
        case "FETCH_ALL":
            return action.payload;
        case "TECH_NEWS":
            return action.payload;
        case "ENT_NEWS":
            return action.payload;
        case "SPORTS_NEWS":
            return action.payload;
        case "SEARCH_NEWS":
            return action.payload;
        case "BUSINESS_NEWS":
            return action.payload;
        default:
            return news;
    }
}