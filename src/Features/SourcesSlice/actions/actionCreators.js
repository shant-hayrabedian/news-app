import {FETCH_SOURCES} from '../../CONSTANTS'
import {fetchSources} from '../../APICALLS.js'


//actions
const stateUpdate = (newState) => {
    return {
        type: FETCH_SOURCES,
        payload: newState
    }
}


//action loader
export function loadFetchedNews() {

    return (dispatch, getState) => {
        
     return   fetchSources().then((loadedNews) => {
         
                dispatch(stateUpdate(loadedNews))
            })
    }
}
