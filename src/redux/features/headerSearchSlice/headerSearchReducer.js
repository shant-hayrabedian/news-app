import { FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS, TO_EMPTY_ARRAY } from './constants'


export const initialSearchState = {
    fromEvent: [],
}


export const getArticlesfromSearching = (state = initialSearchState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS:
            return { ...state, fromEvent: [...state.fromEvent, ...action.payload] };
        case TO_EMPTY_ARRAY:
            return { ...state, fromEvent: action.payload }
        case 'newest1':
            return { ...state, fromEvent: [...state.fromEvent, ...action.payload] }
        case 'oldest1':
            return { ...state, fromEvent: [...state.fromEvent, ...action.payload] }
        default:
            return state
    }

}
