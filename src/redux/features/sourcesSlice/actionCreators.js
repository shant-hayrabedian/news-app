import {FETCH_SOURCES, TO_EMPTY_SOURCE} from './constants'
// import {fetchSources} from '../APICALLS.js'
import {fetchSources} from '../../../api/sourcesSliceAPI'

//actions
const stateUpdate = (newState) => {
    return {
        type: FETCH_SOURCES,
        payload: newState
    }
}

// const emptyState = () =>{
//     return {
//         type:  TO_EMPTY_SOURCE,
//         payload: []
//     }
// }

//action loader
export function loadFetchedSources() {

    return (dispatch, getState) => {
        
     return   fetchSources().then((loadedNews) => {
         
                dispatch(stateUpdate(loadedNews))
            })
    }
}

// export function toEmptyTheSource(){
//     return dispatch => dispatch(emptyState())
// }