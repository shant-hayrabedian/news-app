import {FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS,  TO_EMPTY_ARRAY} from './constants'


export const initialSearchState = {
    fromEvent:[],
}


export const getArticlesfromSearching = (state = initialSearchState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS:
            return { ...state, fromEvent: [...action.payload, ...state.fromEvent]};
        case  TO_EMPTY_ARRAY:
            return {fromEvent: action.payload}
        default:
            return state
    }

} 
