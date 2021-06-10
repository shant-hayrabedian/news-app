import {FETCH_SOURCES} from './constants'
// import {fetchSources} from '../APICALLS.js'
import {fetchSources} from '../../../api/sourcesSliceAPI'

//actions
const stateUpdate = (newState) => {
    return {
        type: FETCH_SOURCES,
        payload: newState
    }
}

//action loader
export function loadFetchedSources() {

    return (dispatch, getState) => {
        
     return   fetchSources().then((loadedNews) => {
         
                dispatch(stateUpdate(loadedNews))
            })
    }
}
