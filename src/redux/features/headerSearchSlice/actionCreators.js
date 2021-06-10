import { FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS, TO_EMPTY_ARRAY } from './constants'
import { fetchSearchBySelectedQueryParams } from "../../../api/headerSearchSliceAPI";

///!! reverse
const updateOrderToNewestSearch = (arr) => {
    return {
        type: 'newest1',
        payload: arr || []
    }
}

export const sortingSearchedFromNewest = (arr) => {
    return dispatch => {
        return dispatch(updateOrderToNewestSearch(arr.sort((a, b) => {
            if (a.publishedAt.split('Z')[0] < b.publishedAt.split('Z')[0] ) {
                return 1
            } else {
                return -1
            }
        })))
    }
}

const updateOrderToOldestSearch = (arr) => {
    return  {
        type: 'oldest1',
        payload: arr || [],
    }
}

export const sortingSearchedFromOldest = (arr) => {
    return dispatch =>  {
        return dispatch(updateOrderToOldestSearch(arr.sort((a,b)=>{
            if(a.publishedAt.split('Z')[0] > b.publishedAt.split('Z')[0]){
                return 1
            }else{
                return -1
            }
        })))
    }
}



//actions
const stateUpdate = (newState) => {
    return {
        type: FETCH_SEARCH_SOURCE_BY_QUERY_PARAMS,
        payload: newState || [],
    }
}

//second action
const emptyState = () => {
    return {
        type: TO_EMPTY_ARRAY,
        payload: []
    }
}

//action loader
export function loadSearchBySelectedQueryParams(eventTargetValueForSearch, pageSize, page, sortBy) {
    return (dispatch, getState) => {
        return fetchSearchBySelectedQueryParams(eventTargetValueForSearch, pageSize, page, sortBy)
            .then((loadedNews) => {
                dispatch(stateUpdate(loadedNews?.articles))
            })
    }
}


export function toEmptyTheSearchedArray() {
    return dispatch => dispatch(emptyState())
}