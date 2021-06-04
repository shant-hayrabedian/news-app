import {FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS,  TO_EMPTY_ARRAY} from './constants'
import {fetchSearchBySelectedQueryParams} from "../../../api/headerSearchSliceAPI";

//actions
const stateUpdate = (newState) => {
    return {
        type: FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS,
        payload: newState,
    }
}

//second action
const emptyState = () =>{
    return {
        type:  TO_EMPTY_ARRAY,
        payload: []
    }
}

//action loader
export function loadSearchBySelectedQueryParams(eventTargetValue, pageSize, pageNumber) {
    return (dispatch, getState) => {
        return fetchSearchBySelectedQueryParams(eventTargetValue, pageSize, pageNumber).then((loadedNews) => {
            dispatch(stateUpdate(loadedNews.articles))
        })
    }
} 


export function toEmptyTheSearchedArray(){
    return dispatch => dispatch(emptyState())
}