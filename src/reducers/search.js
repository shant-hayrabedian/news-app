const search = (state = {
    news: []
}, action) => {
    switch (action.type) {
        case "FETCH_SEARCHED_NEWS":
            return { ...state, news: action.payload };
        default:
            return state
    }

}

export default search