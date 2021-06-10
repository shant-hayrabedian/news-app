import { FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES, TO_EMPTY_SINGLE_SOURCE } from './constants'
import { fetchArticlesBySelectedSource } from '../../../api/singleSourceSliceAPI'

///!!! reverse

const updateOrderToNewestSource = (arr) => {
    return {
        type: 'newest',
        payload: arr || []
    }
}

export const sortingSourcesFromNewest = (arr) => {
    return dispatch => {
        return dispatch(updateOrderToNewestSource(arr.sort((a, b) => {
            if (a.publishedAt.split('Z')[0] < b.publishedAt.split('Z')[0] ) {
                return 1
            } else {
                return -1
            }
        })))
    }
}

const updateOrderToOldestSource = (arr) => {
    return  {
        type: 'oldest',
        payload: arr || [],
    }
}

export const sortingSourcesFromOldest = (arr) => {
    return dispatch =>  {
        return dispatch(updateOrderToOldestSource(arr.sort((a,b)=>{
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
        type: FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES,
        payload: newState || [],
    }
}

const emptyState = () => {
    return {
        type: TO_EMPTY_SINGLE_SOURCE,
        payload: []
    }
}

//action loader
export function loadArticlesBySelectedSource(sources, pageSize, page, sortBy) {
    return async (dispatch, getState) => {

        return fetchArticlesBySelectedSource(sources, pageSize, page, sortBy).then((loadedNews) => {
            dispatch(stateUpdate(loadedNews?.articles))
        })
    }
}
export function toEmptyTheSingleSourceArray() {
    return dispatch => dispatch(emptyState())
}

