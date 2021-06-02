import {FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS} from './constants'


export const initialSearchState = {}


export const getArticlesfromSearching = (state = initialSearchState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS:
            return { ...state, fromEvent: action.payload };
        default:
            return state
    }

} 
