import {FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS} from './constants'


export const initialSearchState = {}


export const getEventsOfSearchField = (state = initialSearchState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS:
            return { ...state, event: action.payload };
        default:
            return state
    }

}