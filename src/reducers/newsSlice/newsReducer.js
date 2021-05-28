export const initialNewsState = {

}

const fetchNews = (state = initialNewsState, action) => {
    switch (action.type) {
        case "FETCH_NEWS":
            return { ...state, news: action.payload};
        default:
            return state
    }

}

export default fetchNews