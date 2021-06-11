import { FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES, TO_EMPTY_SINGLE_SOURCE } from './constants'
import { fetchArticlesBySelectedSource } from '../../../api/singleSourceSliceAPI'




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

