import {FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES} from './constants'
import {fetchArticlesBySelectedSource} from '../../../api/singleSourceSliceAPI'



//actions
const stateUpdate = (newState) => {
    return {
        type: FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES,
        payload: newState || [],
    }
}

//action loader
export function loadArticlesBySelectedSource(source, pageSize, pageNumber) {
    return  async (dispatch, getState) => {
        
       return fetchArticlesBySelectedSource(source, pageSize, pageNumber).then((loadedNews) => {
                dispatch(stateUpdate(loadedNews?.articles))
            })
    }
}


