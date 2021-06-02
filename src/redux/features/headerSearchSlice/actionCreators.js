import {FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS} from './constants'
import {fetchSearchBySelectedQueryParams} from "../../../api/headerSearchSliceAPI";

//actions
const stateUpdate = (newState) => {
    return {
        type: FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS,
        payload: newState
    }
}

//action loader
export function loadSearchBySelectedQueryParams(endpointOrID) {
    return (dispatch, getState) => {
        return fetchSearchBySelectedQueryParams(endpointOrID).then((loadedNews) => {
            dispatch(stateUpdate(loadedNews))
        })
    }
}